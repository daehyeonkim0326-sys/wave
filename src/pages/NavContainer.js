import { Link } from "react-router-dom";
import navData  from "../data/navData.js"
const NavContainer = () => {
    // console.log(navData);
  return (
    <nav>
        <ul>
        {
        navData.map((item)=>{return(
            <li className="main-menu" key={item.id}>
                <Link to={item.id}>{item.title}</Link>
                {
                    (item.SubMenu.length > 0) && (
                        <ul className="sub-menu">
                            {
                                item.SubMenu.map((sub,idx)=>{
                                    return <li key={idx}>
                                        <Link to={sub.link}>{sub.title}</Link>
                                        </li>
                                })
                            }
                        </ul>
                    )
                }
            </li>
        )})
        }
        </ul>
    </nav>
  )
}

export default NavContainer