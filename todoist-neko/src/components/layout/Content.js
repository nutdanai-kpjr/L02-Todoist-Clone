import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
export const Content = () => {
  return (
    <div>
      <Sidebar />
      <div>Content</div>
    </div>
  );
};
