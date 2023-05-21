import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/auth/login-page";
import SignUpPage from "./pages/auth/signup-page";
import HomePage from "./pages/home/home-page";
import QuestionsPage from "./pages/question/questions-page";
import AnswersPage from "./pages/answer/answers-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" Component={LoginPage}></Route>
        <Route path="/auth/sign-up" Component={SignUpPage}></Route>
        <Route path="/home" Component={HomePage}></Route>
        <Route path="/home/questions" Component={QuestionsPage}></Route>
        <Route path="/home/answers" Component={AnswersPage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
