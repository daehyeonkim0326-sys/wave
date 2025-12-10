import { Link } from "react-router-dom";
import navData  from "../data/navData.js"
import { useState } from "react";
const NavContainer = ({active}) => {
    //활성화 된 서브 메뉴처리
    const [activeMenu,setAtiveMenu] = useState(null);
    // 모바일 상태인지 pc상태인지 확인
    const handleMenuClick =(e,id,hasMenu)=>{
        e.preventDefault();
        const isMobile = window.innerWidth <= 768;
        if(isMobile && hasMenu){
            //모바일 화면에서만 처리
            setAtiveMenu(id);
        }
    }
    return (
        <nav className={active ?`active`:''}>
        <ul>
        {
            navData.map((item)=>{
            const isAcrive = activeMenu === item.id;
            return(
            <li 
            key={item.id}
            className={`main-menu ${isAcrive ? "active":""}`}
            >
                <Link 
                to={item.link}
                onClick={(e)=>{handleMenuClick(e,item.id,item.SubMenu.length>0)}}>
                    {item.title}</Link>
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