import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
export const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <div>Content</div>
      <Tasks></Tasks>
    </div>
  );
};
