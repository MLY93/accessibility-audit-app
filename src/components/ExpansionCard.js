import React, { useState } from "react";
import styled from "styled-components";
import RadioGroup from "./RadioGroup";

const Panel = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  position: relative;
  transform: ${props => `scale(${props.scale})`};
`;

const Required = styled.div`
  border-left: 20px solid black;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  height: 100%;
  width: 0;
  left: 0px;
  top: 0;
  z-index: 2;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
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

const ExpansionCard = props => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Panel scale={props.scale}>
      <Required showMore={showMore} />
      <CategoryHeader onClick={() => setShowMore(!showMore)}>
        <Heading>{props.heading}</Heading>
      </CategoryHeader>
      {showMore && (
        <>
          <Labels>
            <CheckboxLabel>Yes</CheckboxLabel>
            <CheckboxLabel>No</CheckboxLabel>
            <CheckboxLabel>N/A</CheckboxLabel>
          </Labels>
          <CheckList>
            {props.subCategories &&
              props.subCategories.map((item, i) => {
                return <RadioGroup group={i} label={item.heading} />;
              })}
          </CheckList>
        </>
      )}
    </Panel>
  );
};
export default ExpansionCard;
