import React, { useState } from "react";
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

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin: 3px 20px;
  background-color: ${props => (props.check ? "green" : "#000")};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #000;
  }

  ${Icon} {
    visibility: ${props => (props.check ? "hidden" : "visible")};
  }
`;

const Checkbox = ({ ...props }) => {
  const [check, setCheck] = useState(false);

  return (
    <CheckboxContainer>
      <HiddenCheckbox onChange={() => setCheck(!check)} {...props} />
      <StyledCheckbox
        onClick={e => e.stopPropagation()}
        onChange={() => setCheck(!check)}
        check={check}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
export default Checkbox;
