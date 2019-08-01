import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Field = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  /* border: 0.5px solid #512da8; */

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px #282828;
  }

  &:active {
    background-color: #ffffff;
    color: #512da8;
    box-shadow: 0px 4px 20px 0px #282828;
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
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;

  &:focus {
    padding: 24px 16px 8px 16px;
    top: 4px;
    opacity: 1;
    color: #512da8;
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
  color: #512da8;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;

  &:active {
    top: 4px;
    opacity: 1;
    color: #512da8;
  }
`;

const TextInput = ({ value, lock, active, id }) => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState(
    localStorage.getItem("nameOfComponent") || ""
  );

  useEffect(() => {
    localStorage.setItem("nameOfComponent", text);
  }, [text]);

  const fieldClassName = `field ${(lock ? active : active || value) &&
    "active"} ${lock && !active && "locked"}`;
  const label = "Type the name of your Component here";
  return (
    <Field
      className={fieldClassName}
      value=""
      onFocus={() => setFocus(true)}
      error=""
      label={label}
    >
      <Input
        id={id}
        value={text}
        placeholder={label}
        onFocus={() => !lock && setFocus(true)}
        onBlur={() => !lock && setFocus(false)}
        focus={focus}
        type="text"
        onChange={event => setText(event.target.value)}
      />
      <Label htmlFor={1}>{label}</Label>
    </Field>
  );
};

export default TextInput;
