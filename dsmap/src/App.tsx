import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalstyle";
import { MainPage } from "./components/test";

const App: React.FC = () => {
  return (
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

export default App;
