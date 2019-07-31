import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 10px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 8px 8px;
  background-color: ${props => (props.checked ? props.color : "unset")};
  transition: all 150ms;
  border: 1px solid #000;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #000;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = props => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    props.setSelectedFn(props.value);
  };

  useEffect(() => {
    setIsChecked(props.selected === props.value);
  }, [props.selected]);

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        {...props}
        onChange={onChange}
        name={props.group}
        checked={isChecked}
      />
      <StyledCheckbox
        onClick={onChange}
        checked={isChecked}
        color={props.color}
      >
        <Icon viewBox="0 0 24 24">{props.icon}</Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
export default Checkbox;
