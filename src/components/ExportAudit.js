import React from "react";
import styled from "styled-components";

import { saveAs } from "file-saver";
import { useStateValue } from "../context/StateContext";

const ExportButton = styled.button`
  background: #000;
  width: 100%;
  color: #fff;
  margin-top: 30px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ExportAudit = props => {
  const [{ questions }] = useStateValue({});
  console.log("questions", questions);
  const fileName = "unnamed";

  function download() {
    const file = new File([JSON.stringify(questions)], fileName, {
      type: "application/json"
    });
    saveAs(file);
  }

  return <ExportButton onClick={download}>Save and Export</ExportButton>;
};

export default ExportAudit;