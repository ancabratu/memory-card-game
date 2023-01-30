import { AddToDo } from "./AddTodo";
import { ToDoList } from "./TodoList";
import React, { useState } from "react";
import { useEffect } from "react";

export const TodoListContainer = () => {
  // task - object
  //done - boolean
  // id - timestamp
  //description - text

  const [tasks, setTasks] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  //update the localStorage (anytime we update state)
  //on first load we need to pull from localStotarage and render
  //in localstorage we can add only strings that's why we stringify
  useEffect(() => {
    if (firstLoad) {
      const tasksFromStorage = localStorage.getItem("tasks") || "[]";
      setTasks(JSON.parse(tasksFromStorage));
      setFirstLoad(false);
    }
  });
  const updateStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = (description) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(),
        done: false,
        description: description,
      },
    ];
    updateStorage(updatedTasks);
    //console.log(updatedTasks);
  };
  const updateTask = (id, description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.description = description;
      }
      return task;
    });
    updateStorage(updatedTasks);
    // console.log(updatedTasks);
  };
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    updateStorage(updatedTasks);
    //console.log(updatedTasks);
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = true;
      }
      return task;
    });
    updateStorage(updatedTasks);
    //console.log(updatedTasks);
  };
  return (
    <>
      <AddToDo addTask={addTask} />
      <ToDoList
        tasks={tasks}
        updateTask={updateTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
};
