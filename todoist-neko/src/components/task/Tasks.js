import React, { useState } from "react";
import { useTasks } from "../../hooks";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
export const Tasks = () => {
  const { tasks } = useTasks("1");

  return (
    <div className="tasks">
      <div>Tasks</div>
      <div className="tasks__list">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} name={task.name} />
        ))}
        <AddTask></AddTask>
      </div>
    </div>
  );
};
