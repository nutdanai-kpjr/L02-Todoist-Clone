import React, { useState } from "react";

import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
