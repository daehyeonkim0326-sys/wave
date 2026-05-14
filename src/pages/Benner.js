import { useGSAP } from "@gsap/react";
import "../styles/Benner.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP,ScrollTrigger)
const Benner = () => {
    //기본 아이템 8개의 이름을 배열
    const bestItems = Array.from({length:8},(_,idx)=>{
        return `item-${String(idx+1).padStart(2,'0')}`;
    });
    //무한 롤링을 위해서 3배 복제 :baseItems
    const extendedItems = [...bestItems,...bestItems];
    const containerRef = useRef(null);
    useGSAP(()=>{
        gsap.to(containerRef.current,{
            xPercent:-50,
            duration: 30,
            ease:'none',
            repeat: -1,
            pin:false,
             //다음 컨텐츠가 핀이 끝날때까지 아래에 있도록: 공간확보
            pinSpacing:true,
            markers:false
            
            
        });
        gsap.to(containerRef.current,{
            y:'50vh',
            ease:'none',
            scrollTrigger:{
                trigger:containerRef.current,
                start:'top 50%',
                end: '+=500',
                scrub: 1,
                pin:false,
                 //다음 컨텐츠가 핀이 끝날때까지 아래에 있도록: 공간확보
                pinSpacing:false,
                markers:false
            }
        });
    },{scope:containerRef});
  return (
    <aside id="mqrquee" >
        <ul ref={containerRef}>
            {
                extendedItems.map((item,idx)=>{
                    return(
                        <li key={idx}>
                            <img src={require(`../assets/SVG/${item}.svg`)} alt={item}/>
                        </li>
                    )
                })
            }
        </ul>
    </aside>
  )
}

export default Benner