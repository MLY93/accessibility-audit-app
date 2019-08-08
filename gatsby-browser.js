/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";

import { StateProvider } from "./src/context/StateContext";
import "./src/components/layout.css";

export const wrapRootElement = ({ element }) => {
  const componentData = JSON.parse(localStorage.getItem("ComponentData"));
  const initialState = {
    name: componentData ? componentData.name : "",
    questions: componentData ? componentData.questions : {}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateName":
        const nameData = {
          ...state,
          name: action.newData
        };
        localStorage.setItem("ComponentData", JSON.stringify(nameData));
        return nameData;

      case "updateQuestions":
        const questionData = {
          ...state,
          questions: action.newData
        };
        localStorage.setItem("ComponentData", JSON.stringify(questionData));
        return questionData;

      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {element}
    </StateProvider>
  );
};
