import {
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  propNames,
} from "@chakra-ui/react";
import { InputIcon } from "./InputIcon";

// https://chakra-ui.com/docs/components/form/input
export default function InputText({
  id,
  label,
  labelPosition = "left",
  leftElement,
  invalid,
  readonly,
  required,
  disabled,
  defaultValue,
  value,
  onChange,
  onClick,
  errorBorderColor,
  focusBorderColor,
  htmlSize,
  size,
  variant,
  placeholder,
  helperText,
}) {
  return (
    <FormControl id={id} py={2}>
      {label && (
        <FormLabel justifyContent={labelPosition} display="flex">
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftElement && (
          <InputLeftElement
            pointerEvents="none"
            children={<InputIcon icon={leftElement} />}
          />
        )}
        <Input
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
          value={value}
          onChange={onChange}
          onClick={onClick}
        />
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
