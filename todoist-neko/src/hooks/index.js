import { useState, useEffect } from "react";
import { tasksRef, getProjects } from "../controllers/firebase_controller";
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
    async function getTasks() {
      const tasksSnapshot = tasksRef.where("projectId", "==", selectedProject);
      const tasksRealTime = tasksSnapshot.onSnapshot((snapshot) => {
        const tasks = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setTasks(tasks.filter((task) => task.archived !== true));
        setArchivedTasks(tasks.filter((task) => task.archived !== false));
      });
      console.log("tasksRealTime");
    }

    getTasks();
    // return () => {
    //   // cleanup
    //   getTasks();
    // };

    // load new tasks
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState(defaultProject);
  useEffect(() => {
    async function fetchProjects() {
      const newProjects = await getProjects();
      setProjects(newProjects);
    }
    fetchProjects();
  }, [projects]);
  return { projects, setProjects };
};
