import { useState } from "react"
import "../styles/footer.css"
const Footer = () => {
  const[isShow,setIsShow] = useState(false);
  const handleClick =()=>{
    setIsShow(!isShow);
  }
  return (
    <footer>
      <div className="left">
        <h3>서울특별시 금천구 벚꽃로 298, 17층(가산동, 대륭포스트타워6차)</h3>
        <p>Copyright @ CONNECTWAVE CO.,LTD. All Rights Reserved.</p>
      </div>
      <div className="right">
        { isShow&&
        (<ul>
          <li>다나와 </li>
          <li>에누리</li>
        </ul>)}
          <p onClick={handleClick}>관련 사이트 <span>{isShow?"∧":"∨"}</span></p>
      </div>
    </footer>
  )
}

export default Footer