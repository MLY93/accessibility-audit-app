import React from "react";

import { StateProvider } from "./src/context/StateContext";

export const wrapRootElement = ({ element }) => {
  const initialState = {
    name: {},
    questions: {}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateQuestions":
        return {
          ...state,
          questions: action.newData
        };
      case "updateName":
        return {
          ...state,
          name: action.newData
        };
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
