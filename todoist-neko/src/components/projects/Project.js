import React, { useState } from "react";
import { deleteProject } from "../../controllers/firebase_controller";

export const Project = ({ id, name }) => {
  const onCheck = (id) => {
    console.log(id);
  };
  const onDelete = (id) => {
    console.log("id", id);
    deleteProject(id);
  };

  return (
    <div className="project">
      <div className="project__head">
        <button onClick={() => onCheck(id)}> {name}</button>
      </div>
      <div className="project__tail">
        <button onClick={() => onDelete(id)}>🗑</button>
      </div>
    </div>
  );
};
