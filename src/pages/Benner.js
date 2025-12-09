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
            repeat: -1
        });
        gsap.to(containerRef.current,{
            y:'50vh',
            ease:'none',
            scrollTrigger:{
                trigger:containerRef.current,
                start:'top 70%',
                end: '+=200',
                scrub: 1
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