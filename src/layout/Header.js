import { Link } from "react-router-dom"
import NavContainer from "../pages/NavContainer"
import SelectLang from "../pages/SelectLang"
import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">ConnectWave</Link>
      <NavContainer />
      <SelectLang/>
    </header>
  )
}

export default Header