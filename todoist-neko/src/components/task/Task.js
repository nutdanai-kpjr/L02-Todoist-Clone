import React, { useState } from "react";
export const Task = ({ id, name }) => {
  const onCheck = (id) => {
    console.log(id);
  };
  return (
    <div className="task">
      <div>
        <button onClick={() => onCheck(id)}>[ - ]</button>
        {name}
      </div>
    </div>
  );
};
