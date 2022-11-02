import React, { useState } from "react";

export const Sidebar = () => {
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
          <li>
            <button>Project Spaceship (Remove)</button>
          </li>
          <li>
            <button>Project Wooden PC</button>
          </li>
          <li>
            <button>Add Projects</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
