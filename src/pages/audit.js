import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
import ExpansionCard from "../components/ExpansionCard";
import sectionsArray from "../Arrays/sectionsArray";
import TextInput from "../components/TextInput";
import { Motion, spring } from "react-motion";

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

const Header = styled.h2`
  font-size: 30px;
  color: #333;
`;

const PanelContainer = styled.div`
  display: flex;
  margin: 30px;
  height: 80%;
  max-width: 1240px;
  justify-content: center;
  flex-direction: column;
`;

const auditPage = () => (
  <>
    <SEO title="audit" />
    <Page>
      <PanelContainer>
        <Header>Accessibility Checklist</Header>
        <TextInput label="name of your react component" />
        {sectionsArray.map((item, i) => {
          return (
            <Motion
              defaultStyle={{ scale: 0.5 }}
              style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
            >
              {interpolatedStyle => (
                <ExpansionCard
                  scale={interpolatedStyle.scale}
                  heading={item.heading}
                  item={item.item}
                  key={i}
                />
              )}
            </Motion>
          );
        })}
      </PanelContainer>
    </Page>
  </>
);

export default auditPage;
