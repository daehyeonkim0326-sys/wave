import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/font.css";
import "./styles/reset.css";
import Wave from "./pages/Wave";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
const App=()=> {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Wave/>}/>
              <Route path="about" element={<About/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
