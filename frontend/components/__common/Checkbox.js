import {
  FormControl,
  FormLabel,
  Select,
  Option,
  Checkbox,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  propNames,
} from "@chakra-ui/react";
import { InputIcon } from "./InputIcon";

// https://chakra-ui.com/docs/components/checkbox/usage
export const InputCheckbox = ({
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
  <FormControl id={id} py={2}>
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
      spacing="3"
    >
      {values.map((option) => (
        <Checkbox key={option} value={option} type="checkbox">
          {leftElement && <InputIcon icon={leftElement} />}
          <Text color="emphasized" fontWeight="medium" fontSize="sm">
            {option}
          </Text>
        </Checkbox>
      ))}
    </Select>
  </FormControl>
);
