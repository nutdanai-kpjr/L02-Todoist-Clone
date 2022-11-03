import { firebase } from "../firebase";
import "firebase/compat/firestore";
const db = firebase.firestore();
const usersRef = db.collection("users");
const userRef = usersRef.doc("test-user-id");
const tasksRef = userRef.collection("tasks");
const projectsRef = userRef.collection("projects");

const addProject = async (name) => {
  const project = {
    name: name,
  };
  await projectsRef.add(project);
  return;
};

const deleteProject = async (id) => {
  const project = projectsRef.doc(id);
  await project.delete();
  return;
};

const addTask = async ({ name, projectId, date }) => {
  const task = {
    name: name,
    projectId: projectId,
    date: date,
    archived: false,
  };
  await tasksRef.add(task);
};

const archiveTask = async (id) => {
  const task = tasksRef.doc(id);
  await task.update({ archived: true });
};

const deleteTask = async (id) => {
  const task = tasksRef.doc(id);
  await task.delete();
};
const editTask = async (id, name, projectId, date) => {
  const task = tasksRef.doc(id);
  await task.update({ name: name, projectId: projectId, date: date });
};

const getProjects = async () => {
  const projectsSnapshot = await projects.get();
  const projects = projectsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return projects;
};

const getTasksByProjectId = async (projectId) => {
  const tasksSnapshot = await tasks.where("projectId", "==", projectId).get();
  const tasks = tasksSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return tasks;
};

// const getTasksByFilter = async (filter) => {

// }
// const getProjects
// const getTasksByProjectId
// const getTasksByFilter

export {
  addProject,
  deleteProject,
  addTask,
  archiveTask,
  deleteTask,
  editTask,
  getProjects,
  getTasksByProjectId,
  tasksRef,
};
