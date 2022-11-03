import React, { useState } from "react";
import { addTask } from "../../controllers/firebase_controller";
import { log } from "../../helpers/logger";
// TODO : Show project list to assign task to
export const AddTask = () => {
  const add = () => {
    log("Add Task");
    const task = {
      name: "Go Fishing",
      projectId: "1",
      date: "2021-01-01",
    };
    addTask(task);
  };
  return (
    <div className="task">
      <div>
        <button onClick={add}>[ + ]</button>
        <input type="text" placeholder="New Task" />
      </div>
    </div>
  );
};
