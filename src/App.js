import React from "react";
import { Route, Routes } from "react-router-dom";
import InsertData from "./components/page/InsertData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InsertData />} />
    </Routes>
  );
}

export default App;
