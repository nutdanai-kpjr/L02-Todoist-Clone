import React, { useState } from "react";
// TODO : Show project list to assign task to
export const AddTask = () => {
  return (
    <div className="task">
      <div>
        <button>[ + ]</button>
        <input type="text" placeholder="New Task" />
      </div>
    </div>
  );
};
