import React, { useState } from "react";
import styled from "styled-components";
import useTextInput from "./CustomHooks";
import { Motion, spring } from "react-motion";

const Field = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0px 16px;
  border: none;
  font-weight: 400;
  background-color: transparent;
  color: #282828;
  outline: none;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;

  &:focus {
    padding: 24px 16px 8px 16px;
    top: 4px;
    opacity: 1;
    color: #512da8;
  }

  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  &::-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  &:-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 24px;
  left: 16px;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;
  top: 4px;
  opacity: 1;
  color: #512da8;
`;

const TextInput = ({ active, value, predicted, id, label }) => {
  const { input, handleInputChange, handleSubmit } = useTextInput({
    TextInput
  });
  const [focus, setFocus] = useState(false);
  const [lock, setLock] = useState(false);

  const fieldClassName = `field ${(lock ? active : active || value) &&
    "active"} ${lock && !active && "locked"}`;

  return (
    <Field
      className={fieldClassName}
      {...(active && value && predicted && predicted.includes(value) && (
        <p className="predicted">{predicted}</p>
      ))}
      value=""
      onFocus={() => setFocus(true)}
      error=""
      label="Name of your Component"
      onSubmit={handleSubmit}
    >
      <Input
        id={id}
        value={input}
        placeholder={label}
        type="text"
        onChange={handleInputChange}
      />
      <Label htmlFor={1}>{label}</Label>
    </Field>
  );
};

export default TextInput;
