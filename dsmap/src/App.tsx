<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';


function App() {

=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import { MainPage } from "./components/test";
>>>>>>> origin/mainpage

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
=======
    <>
        <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Router>
    </>
  );
};
>>>>>>> origin/mainpage

export default App;
