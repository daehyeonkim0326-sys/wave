import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/font.css";
import "./styles/reset.css";
import Summary from "./pages/Summary";
import Wave from "./pages/Wave";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import Info from "./pages/Info";
const App=()=> {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Wave/>}/>
              <Route path="info" element={<Info title="연혁"/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="summary" element={<Summary title="사업개요"/>}/>
              <Route path="consumer" element={<Summary title="컨슈머커머스"/>}/>
              <Route path="seller" element={<Summary title="셀러커머스"/>}/>
              <Route path="crossborder" element={<Summary title="제휴제안"/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
