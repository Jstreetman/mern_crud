import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import App from "./components/App";
import RegisterDetails from "./components/RegisterDetails";
import LoginDetails from "./components/LoginDetails";
import News from "./components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterDetails />,
  },
  {
    path: "/login",
    element: <LoginDetails />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
