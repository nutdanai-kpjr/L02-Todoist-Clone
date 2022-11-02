import React, { useState } from "react";
export const AddTask = () => {
  return (
    <div className="task">
      <div>
        <button>+</button>
        <input type="text" placeholder="New G" />
      </div>
    </div>
  );
};
