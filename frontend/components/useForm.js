import { useMemo, useCallback, useEffect } from "react";
import { useMachine } from "@xstate/react";

import { formMachine } from "./VAOP/formMachine";

export const useForm2 = ({
  initialValues = {},
  validationSchema,
  onSubmit = () => null,
}) => {
  const [state, send] = useMachine(
    formMachine
      .withContext({
        schema: validationSchema,
        initialValues,
        values: initialValues,
        touched: {},
        errors: {},
        dirty: false,
      })
      .withConfig({
        services: {
          submit: (ctx) => onSubmit(ctx.values),
        },
      })
  );

  const { dirty, values, touched, errors } = state.context;
  const submitting = state.matches("submitting");
  const submitted = state.matches("submitted");
  const failure = state.matches("failure");

  function setValue(name, value) {
    send("INPUT.CHANGE", { name, data: value });
  }

  function setValues(newValue) {
    send("SET_VALUES", { data: newValue });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    send("SUBMIT");
  }

  function resetForm() {
    send("RESET");
  }

  const valid = useMemo(() => {
    return Object.values(errors).every((err) => !err);
  }, [errors]);

  const getInputProps = useCallback(
    (name, type = "text") => {
      const value = state.context.values[name];
      return {
        name,
        type,
        value,
        onFocus: () => {
          send("INPUT.FOCUS", { name });
        },
        onBlur: () => {
          send("INPUT.BLUR", { name });
        },
        onChange: (ev) => {
          const val = ev.target ? ev.target.value : ev;
          send("INPUT.CHANGE", { name, data: val });
        },
      };
    },
    [state, send]
  );

  const hasError = useCallback(
    (name) => {
      return errors[name] && touched[name];
    },
    [errors, touched]
  );

  useEffect(() => {
    send("MOUNT");
  }, [send]);

  return {
    __state: state,
    values,
    touched,
    errors,
    dirty,
    valid,
    submitting,
    submitted,
    failure,
    setValue,
    setValues,
    handleSubmit,
    resetForm,
    getInputProps,
    hasError,
  };
};
