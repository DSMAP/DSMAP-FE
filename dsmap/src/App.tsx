import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { MainPage } from "./pages/mainpage";
import { MyPage } from "./pages/mypage";

const App: React.FC = () => {
  return (
    <>
        <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
          </Router>
    </>
  );
};

export default App;
