import { useState, useEffect } from "react";

export const defaultTask = [
  { id: 1, name: "Run to the moon" },
  { id: 2, name: "Run to the sun" },
  { id: 3, name: "Run to the cat" },
];

export const defaultArchivedTask = [{ id: 2, name: "Fly to the sun" }];

export const defaultProject = [
  { id: 1, name: "Project 1" },
  { id: 2, name: "Project 2" },
];

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState(defaultTask);
  const [archivedTasks, setArchivedTasks] = useState(defaultArchivedTask);

  useEffect(() => {
    // load new tasks
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState(defaultProject);
  useEffect(() => {}, [projects]);
  return { projects, setProjects };
};
