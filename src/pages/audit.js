import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import ExpansionCard from "../components/ExpansionCard";
import sectionsArray from "../Arrays/sectionsArray";
import TextInput from "../components/TextInput";
import Export from "../components/ExportAudit";

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3%;
  width: 100%;
`;

const Header = styled.h2`
  font-size: 30px;
  color: #333;
`;

const PanelContainer = styled.div`
  display: flex;
  max-width: 970px;
  justify-content: center;
  flex-direction: column;
`;

const auditPage = () => (
  <>
    <SEO title="audit" />
    <Page>
      <PanelContainer>
        <Header>Accessibility Checklist</Header>
        <TextInput label="Type the name of your component here..." />
        {sectionsArray.map((item, i) => {
          return (
            <ExpansionCard
              tabIndex="0"
              role="button"
              section={i}
              key={i}
              heading={item.heading}
              item={item.item}
              subCategories={item.subCategories}
            />
          );
        })}
        <Export />
      </PanelContainer>
    </Page>
  </>
);

export default auditPage;
