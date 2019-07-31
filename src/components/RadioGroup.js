import React, { useState } from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const CheckListItem = styled.label`
  display: flex;
  color: #333;
`;

const ItemHeading = styled.p`
  margin: 8px;
`;

const RadioGroupContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 4px 0;
`;

const RadioGroup = ({ ...props }) => {
  const [selected, setSelected] = useState("");
  return (
    <RadioGroupContainer>
      <Checkbox
        setSelectedFn={setSelected}
        selected={selected}
        value="pass"
        color="green"
        group={props.i}
        icon={<polyline points="20 6 9 17 4 12" />}
      />
      <Checkbox
        setSelectedFn={setSelected}
        selected={selected}
        value="fail"
        color="red"
        group={props.i}
        icon={
          <>
            <polyline points="6 6 18 18" />
            <polyline points="6 18 18 6" />
          </>
        }
      />
      <Checkbox
        setSelectedFn={setSelected}
        selected={selected}
        value="na"
        color="black"
        group={props.i}
        icon={<polyline points="4 12 20 12" />}
      />
      <CheckListItem>
        <ItemHeading>{props.label}</ItemHeading>
      </CheckListItem>
    </RadioGroupContainer>
  );
};

export default RadioGroup;
