import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Comments from "./components/Comments/Comments";
import Share from "./pages/Share/Share";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/share" element={<Share />} />
        {/* <Route path="/comments" element={<Comments commentModal={commentModal} setCommentModal={setCommentModal} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
