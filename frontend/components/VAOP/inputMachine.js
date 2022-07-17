import { Machine, sendParent, assign } from "xstate";

const commitActions = [
  sendParent((ctx) => ({ type: "INPUT.COMMIT", input: ctx })),
];

export const inputMachine = Machine({
  id: "input",
  initial: "idle",
  context: {
    initialValue: "",
    name: "",
    value: "",
    touched: false,
  },
  states: {
    idle: {
      on: {
        CHANGE: {
          actions: [assign({ value: (_, ev) => ev.data }), ...commitActions],
        },
        BLUR: {
          actions: [
            assign({ touched: true }),
            ...commitActions,
            sendParent("VALIDATE_INPUTS"),
          ],
        },
        RESET: {
          actions: assign({ value: (ctx) => ctx.initialValue }),
        },
      },
    },
  },
});
