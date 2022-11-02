import React, { useState } from "react";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
export const Tasks = () => {
  return (
    <div className="tasks">
      <div>Tasks</div>
      <div className="tasks__list">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <AddTask></AddTask>
      </div>
    </div>
  );
};
