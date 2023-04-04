import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/comments" element={<Comments commentModal={commentModal} setCommentModal={setCommentModal} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
