import { Outlet } from "react-router-dom"
import Footer from "./Footer.js"
import Header from "./Header.js"
import Main from "./Main.js"
import "../styles/mainlayout.css"
const MainLayout = () => {
  return (
    <div id="main-layout">
      {/*강제 고정*/}
        <Header/>
        <Main>
            {/* main,about */}
            <Outlet />
        </Main>
        <Footer/> 
    </div>
  )
}

export default MainLayout