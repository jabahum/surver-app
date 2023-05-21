import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth/login'></Route>
        <Route path='/auth/sign-up'></Route>
        <Route path='/home'></Route>
        <Route path='/questions' ></Route>
        <Route path='/answers' ></Route>
      </Routes>

    </Router>

  );
}

export default App;
