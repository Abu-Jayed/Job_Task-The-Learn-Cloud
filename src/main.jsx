import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import About from "./About/About.jsx";
import AddTodo from "./components/AddTodo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "about", element: <About></About> },
      { path: "/dashboard/add", element: <AddTodo></AddTodo> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
