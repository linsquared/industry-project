import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Comments from "./pages/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comments" element={<Comments />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
