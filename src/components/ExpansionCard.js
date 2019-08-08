import React, { useState } from "react";
import styled from "styled-components";
import RadioGroup from "./RadioGroup";

const Panel = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 100%;
  position: relative;
  animation: stretch 0.5s ease-out 0s alternate 1 none running;

  @keyframes stretch {
    0% {
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Required = styled.div`
  border-left: 20px solid black;
  border-bottom: 20px solid transparent;
  position: absolute;
  height: 100%;
  cursor: pointer;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  cursor: pointer;
`;

const Heading = styled.h3`
  color: #2f2f2f;
  font-size: 18px;
  padding: 0 14px;
  margin: 0;
`;

const CheckList = styled.div`
  transition: all 0.3s ease-in-out;
  padding: 0 14px;
`;

const Labels = styled.div`
  padding: 0 14px;
`;

const CheckboxLabel = styled.label`
  text-align: center;
  font-size: 12px;
  width: 30px;
  margin: 0 8px;
  display: inline-block;
`;

const ListContainer = styled.div`
  padding: 0 20px 20px;
`;

const ExpansionCard = props => {
  const [showMore, setShowMore] = useState(false);
  const accessibileClick = event => {
    if (event.keyCode === 13) {
      setShowMore(!showMore);
    }
    return;
  };

  return (
    <Panel
      tabIndex="0"
      role="button"
      scale={props.scale}
      onKeyDown={event => accessibileClick(event)}
    >
      <Required onClick={() => setShowMore(!showMore)} />
      <CategoryHeader onClick={() => setShowMore(!showMore)}>
        <Heading>{props.heading}</Heading>
      </CategoryHeader>
      {showMore && (
        <ListContainer>
          <Labels>
            <CheckboxLabel>Yes</CheckboxLabel>
            <CheckboxLabel>No</CheckboxLabel>
            <CheckboxLabel>N/A</CheckboxLabel>
          </Labels>
          <CheckList>
            {props.subCategories &&
              props.subCategories.map((item, i) => {
                return (
                  <RadioGroup
                    key={i}
                    section={props.section}
                    question={i}
                    label={item.heading}
                  />
                );
              })}
          </CheckList>
        </ListContainer>
      )}
    </Panel>
  );
};
export default ExpansionCard;
