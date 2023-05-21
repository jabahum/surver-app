import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import LoginPage from "./pages/auth/login-page";
import SignUpPage from "./pages/auth/signup-page";
import HomePage from "./pages/home/home-page";
import QuestionsPage from "./pages/question/questions-page";
import AnswersPage from "./pages/answer/answers-page";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />}></Route>
          <Route path="/auth/sign-up" element={<SignUpPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/home/questions" element={<QuestionsPage />}></Route>
          <Route path="/home/answers" element={<AnswersPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
