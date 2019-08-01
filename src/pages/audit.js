import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import ExpansionCard from "../components/ExpansionCard";
import sectionsArray from "../Arrays/sectionsArray";
import TextInput from "../components/TextInput";
import { Motion, spring } from "react-motion";
import { UserProvider } from "../GlobalState";

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

const auditPage = props => {
  // const initialState = {
  //   data: {}
  // };

  // const [{ data }, dispatch] = useStateValue();
  // console.log("data", StateContext);

  return (
    <UserProvider>
      <SEO title="audit" />
      <Page>
        <PanelContainer>
          <Header>Accessibility Checklist</Header>
          <TextInput label="Type the name of your component here..." />
          {sectionsArray.map((item, i) => {
            return (
              <Motion
                key={i}
                defaultStyle={{ scale: 0.5 }}
                style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
              >
                {interpolatedStyle => (
                  <ExpansionCard
                    section={i}
                    scale={interpolatedStyle.scale}
                    heading={item.heading}
                    item={item.item}
                    subCategories={item.subCategories}
                  />
                )}
              </Motion>
            );
          })}
        </PanelContainer>
      </Page>
    </UserProvider>
  );
};

export default auditPage;
