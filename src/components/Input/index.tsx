import { InputHTMLAttributes } from "react";
import { BlankInput, StyledInput, StyledLabel } from "../Card/style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => (
  <StyledInput>
    {label && <StyledLabel>{label}: </StyledLabel>}
    <BlankInput {...rest} placeholder={placeholder} />
  </StyledInput>
);

export default Input;
