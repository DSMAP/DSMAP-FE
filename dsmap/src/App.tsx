import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import GlobalStyle from "./globalstyle";
import { MainPage } from "./pages/mainpage";

const App: React.FC = () => {
  return (
    <>
        <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
          </Router>
    </>
  );
};

export default App;
