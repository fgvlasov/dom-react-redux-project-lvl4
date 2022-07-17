import React, { useState } from "react";
import { Controller } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";

import FormLabel from "./FormLabel";
import FormError from "./FormError";
import FormStyledTextfield from "./FormStyledTextfield";
import FormDescription from "./FormDescription";
import { useTheme } from "@mui/styles";

/**
 * Controlled Textfield, dependencies hoook-form, mui
 *
 * @param {*} defaultValue
 * @param {*} name
 * @param {*} control
 * @param {*} error
 * @param {*} label
 * @param {*} rows
 * @returns
 */
export default function ({
  control,
  name,
  defaultValue,
  error,
  type,
  label,
  placeholder,
  icon,
  rows,
  description,
  disabled,
  setInstruction = null,
  fullWidth = true,
  variant = "outlined",
  size = "small",
  step,
  toggle = false,
  toggleApproveAction,
  toggleDeclineAction,
}) {
  const [modify, setModify] = useState(true);
  const theme = useTheme();

  const setToggle = () => {
    setModify(!modify);
  };

  const approve = () => {
    setModify(!modify);
    toggleApproveAction();
  };

  const decline = () => {
    setModify(!modify);
    toggleDeclineAction();
  };

  return (
    <FormControl fullWidth={fullWidth}>
      <FormLabel>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {label}
          {toggle && (
            <IconButton onClick={setToggle}>
              <EditIcon />
            </IconButton>
          )}
        </Stack>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ value, onChange }) => (
          <FormStyledTextfield
            value={value}
            onChange={onChange}
            onFocus={() => setInstruction && setInstruction(name)}
            onBlur={() => setInstruction && setInstruction("")}
            error={error}
            type={type}
            placeholder={placeholder}
            icon={icon}
            rows={rows}
            variant={variant}
            size={size}
            step={step}
            postalCode={name === "postalCode"}
            disabled={disabled || (toggle && modify)}
            showDisabledAsText={toggle}
          />
        )}
      />
      {toggle && !modify && (
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <IconButton onClick={decline}>
            <CancelIcon
              sx={{
                borderRadius: "50%",
                "&:hover": {
                  color: theme.palette.error.main,
                },
              }}
            />
          </IconButton>
          <IconButton onClick={approve}>
            <DoneIcon color="success" />
          </IconButton>
        </Stack>
      )}
      <FormError error={error} />
      <FormDescription>{description}</FormDescription>
    </FormControl>
  );
}
