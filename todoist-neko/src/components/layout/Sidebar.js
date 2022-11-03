import React, { useState } from "react";
import { useProjectsValue } from "../../context";
import { addProject } from "../../controllers/firebase_controller";
import { Project } from "../projects/Project";
export const Sidebar = () => {
  const { projects } = useProjectsValue();
  const add = (name) => {
    addProject("New Project");
  };
  return (
    <div className="sidebar">
      Sidebar
      <div className="sidebar__quickacess_main">
        <ul>
          <li>
            <button>Inbox</button>
          </li>
          <li>
            <button>Today</button>
          </li>
          <li>
            <button>Next 7 Days</button>
          </li>
          <li>
            <button>Show/Hide Projects</button>
          </li>
        </ul>
      </div>
      <div className="sidebar__quickacess_projects">
        <ul>
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
            ></Project>
          ))}
          <li>
            <button>{projects.length}Project Spaceship (Remove)</button>
          </li>
          <li>
            <button>Project Wooden PC</button>
          </li>
          <li>
            <button onClick={add}>Add Projects</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
