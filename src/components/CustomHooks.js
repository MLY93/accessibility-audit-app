import React, { useState } from "react";

const useTextInput = callback => {
  const [input, setInput] = useState();

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = event => {
    event.persist();
    setInput(event.target.value);
  };
  return {
    handleSubmit,
    handleInputChange,
    input
  };
};

export default useTextInput;
