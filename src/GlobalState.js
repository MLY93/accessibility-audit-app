import React, { createContext } from "react";

const UserContext = createContext({
  globalState: {},
  setQuestions: () => {}
});

export class UserProvider extends React.Component {
  updateQuestions = (name, value) => {
    const { questions } = { ...this.state.globalState };
    const currentState = questions;

    currentState[name] = value;

    this.setState({ questions: currentState });
  };

  state = {
    globalState: {
      name: "",
      questions: {}
    },
    setQuestions: this.updateQuestions
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
