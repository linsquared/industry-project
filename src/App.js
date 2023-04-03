import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
