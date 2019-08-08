import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { handleFileUpload } from "../utils/getFileContents.js";
import * as StateContext from "../context/StateContext";

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

const uploadPage = () => {
  // eslint-disable-next-line
  const [{}, dispatch] = StateContext.useStateValue();

  const onFileUpload = async event => {
    const fileData = await handleFileUpload(event);

    dispatch({
      type: "updateName",
      newData: fileData.name
    });
    dispatch({
      type: "updateQuestions",
      newData: fileData.questions
    });

    window.location = "audit";
  };
  return (
    <>
      <SEO title="upload" />
      <Page>
        <PanelContainer>
          <Header>Upload Audit File</Header>
          <input type="file" name="files[]" onChange={onFileUpload} />
        </PanelContainer>
      </Page>
    </>
  );
};

export default uploadPage;
