import { TextInput } from "@ancabratu/react-components";
import React, { useState } from "react";

export const AddToDo = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
    //console.log("onChange...");
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    addTask(value);
    // todo: add the value as a task...Added
    setValue("");
  };
  return (
    <TextInput
      placeholder="Enter a new task"
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      value={value}
    />
  );
};
