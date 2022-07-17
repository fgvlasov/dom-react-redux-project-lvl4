import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  FormHelperText,
} from "@chakra-ui/react";
import { InputIcon } from "./InputIcon";

// https://chakra-ui.com/docs/components/form/input
export const InputText = ({
  id,
  label,
  labelPosition = "left",
  leftElement,
  values,
  invalid,
  readonly,
  required,
  disabled,
  defaultValue,
  errorBorderColor,
  focusBorderColor,
  htmlSize,
  size,
  variant,
  placeholder,
  helperText,
}) => (
  <FormControl id={id}>
    {label && (
      <FormLabel justifyContent={labelPosition} display="flex">
        {label}
      </FormLabel>
    )}
    <Select
      defaultValue={defaultValue}
      errorBorderColor={errorBorderColor}
      focusBorderColor={focusBorderColor}
      htmlSize={htmlSize}
      isDisabled={disabled}
      isInvalid={invalid}
      isReadOnly={readonly}
      isRequired={required}
      size={size}
      variant={variant}
      placeholder={placeholder}
    >
      {_.map(values, ({ value, labelSelect }, index) => {
        return (
          <Option key={index + value} value={value}>
            {labelSelect}
          </Option>
        );
      })}
    </Select>

    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);
