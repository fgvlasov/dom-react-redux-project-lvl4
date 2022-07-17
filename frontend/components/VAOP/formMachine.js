import { Machine, assign, spawn } from "xstate";
import { inputMachine } from "./inputMachine";

const findInput = (inputs, name) => {
  return inputs.find(({ input }) => input.name === name);
};

const events = {
  "INPUT.COMMIT": {
    actions: assign({
      values: (ctx, ev) => ({
        ...ctx.values,
        [ev.input.name]: ev.input.value,
      }),
      touched: (ctx, ev) => ({
        ...ctx.touched,
        [ev.input.name]: ev.input.touched,
      }),
    }),
  },
  "INPUT.CHANGE": {
    actions: (ctx, ev) => {
      const input = findInput(ctx.inputs, ev.name);
      input && input.ref.send("CHANGE", { data: ev.data });
    },
  },
  "INPUT.FOCUS": {
    actions: [assign({ dirty: true })],
  },
  "INPUT.BLUR": {
    actions: (ctx, ev) => {
      const input = findInput(ctx.inputs, ev.name);
      input && input.ref.send("BLUR");
    },
  },
  VALIDATE_INPUTS: {
    target: "validating",
  },
  SET_VALUES: {
    actions: [assign({ values: (ctx, ev) => ev.data })],
  },
  SUBMIT: {
    target: "submitting",
  },
  RESET: {
    target: "validating",
    actions: [
      (ctx) => {
        ctx.inputs.forEach((input) => {
          input.ref.send("RESET");
        });
      },
      assign({
        values: (ctx) => ctx.initialValues,
        errors: {},
        touched: {},
        dirty: false,
      }),
    ],
  },
};

export const formMachine = Machine({
  id: "form",
  initial: "mounting",
  states: {
    mounting: {
      entry: assign({
        inputs: ({ schema, ...ctx }) =>
          Object.entries(ctx.initialValues).map(([name, value]) => {
            const context = { name, value, initialValue: value };
            const machine = inputMachine.withContext({ ...context, schema });
            return {
              input: context,
              ref: spawn(machine, name),
            };
          }),
      }),
      on: {
        MOUNT: "validating",
      },
    },
    mounted: {
      on: {
        ...events,
      },
    },
    validating: {
      invoke: {
        src: async ({ schema, ...ctx }, ev) => {
          if (!schema) return Promise.resolve();
          return schema
            .validate(ctx.values, { abortEarly: false })
            .catch(({ path, message, inner }) => {
              throw inner.length === 0
                ? { path, message }
                : inner.reduce(
                    (acc, { path, message }) => ({ ...acc, [path]: message }),
                    {}
                  );
            });
        },
        onDone: {
          target: "mounted",
          actions: assign({ errors: {} }),
        },
        onError: {
          target: "mounted",
          actions: assign({ errors: (_, ev) => ev.data }),
        },
      },
    },
    submitting: {
      invoke: {
        src: "submit",
        onDone: "submitted",
        onError: "failure",
      },
    },
    submitted: {
      on: {
        ...events,
      },
    },
    failure: {
      on: {
        ...events,
      },
    },
  },
});
