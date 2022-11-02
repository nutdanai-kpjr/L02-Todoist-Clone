import React, { useState } from "react";
export const Header = () => {
  return (
    <div className="header">
      <div className="header_start">
        <button>Todoist Neko</button>
        <button>Menu</button>
        <button>Home</button>
      </div>
      <div className="header_end">
        <button>Add Task</button>
        <button>Profile</button>
      </div>
    </div>
  );
};
