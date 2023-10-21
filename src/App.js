import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";
import Counter from "./components/counter";
import Home from "./components/Home";
import ErrorTest from "./Error/ErrorTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useCount" element={<useCount />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/ErrorTest" element={<ErrorTest />} />
      </Routes>
    </Router>
  );
}

export default App;
