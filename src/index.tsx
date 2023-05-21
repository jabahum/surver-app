import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/auth/login-page";
import ErrorPage from "./pages/error/error-page";
import SignUpPage from "./pages/auth/signup-page";
import AnswersPage from "./pages/answer/answers-page";
import QuestionsPage from "./pages/question/questions-page";
import HomePage from "./pages/home/home-page";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/questions",
    element: <QuestionsPage />,
  },
  {
    path: "/home/answers",
    element: <AnswersPage />,
  }

]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
