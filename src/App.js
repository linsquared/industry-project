import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Share from "./pages/Share/Share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
