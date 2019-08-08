import React from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";
import { useStateValue } from "../context/StateContext.js";

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

  @media (max-width: 620px) {
    flex-wrap: wrap;
  }
`;

const RadioGroup = props => {
  const [{ questions }, dispatch] = useStateValue();
  const questionKey = `key-${props.section}-${props.question}`;
  const isSelected = questions[questionKey];

  const updateQuestion = value => {
    dispatch({
      type: "updateQuestions",
      newData: { ...questions, [questionKey]: value }
    });
  };

  return (
    <RadioGroupContainer>
      <Checkbox
        setSelectedFn={updateQuestion}
        selected={isSelected}
        value="pass"
        color="green"
        group={questionKey}
        icon={<polyline points="20 6 9 17 4 12" />}
      />
      <Checkbox
        setSelectedFn={updateQuestion}
        selected={isSelected}
        value="fail"
        color="red"
        group={questionKey}
        icon={
          <>
            <polyline points="6 6 18 18" />
            <polyline points="6 18 18 6" />
          </>
        }
      />
      <Checkbox
        setSelectedFn={updateQuestion}
        selected={isSelected}
        value="na"
        color="black"
        group={questionKey}
        icon={<polyline points="4 12 20 12" />}
      />
      <CheckListItem>
        <ItemHeading>{props.label}</ItemHeading>
      </CheckListItem>
    </RadioGroupContainer>
  );
};

export default RadioGroup;
