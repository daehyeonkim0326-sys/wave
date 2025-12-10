import { Link } from "react-router-dom"
import NavContainer from "../pages/NavContainer"
import SelectLang from "../pages/SelectLang"
import "../styles/header.css"
import { useState } from "react"

const Header = () => {
  const[active,setArive] = useState(false);
  const handleClick =()=>{
      setArive(!active);
  }
  return (
    <header>
      <Link to="/" className="logo">ConnectWave</Link>
      <button className={`menu-open ${active? "active" : ""}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavContainer active={active}/>
      <SelectLang/>
    </header>
  )
}

export default Header