import { useGSAP } from "@gsap/react"
import ScrollPage from "../components/ScrollPage"
import page from "../data/scrollpageData.js"
import "../styles/scrollpage.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { useRef } from "react"
gsap.registerPlugin(useGSAP,ScrollTrigger);
const SlideView = () => {
    const containerRef = useRef();
    const listRef = useRef();
    useGSAP(()=>{
        //전체 이동 사이즈
        const scrollW = listRef.current.scrollWidth;
        //현재 view width
        const clientW = window.innerWidth;
        const move = -(scrollW-clientW);
        gsap.to('.page-list',{
            x:move,
            ease:'none',
            scrollTrigger:{
                trigger:containerRef.current,
                start:"center center",
                end: `+=${move*(-1)}`,
                scrub:1,
                pin:true,
                markers:false
            }
        });
    },{containerRef});
  return (
    <section id="comus-page">
        <div className="page-view" ref={containerRef}>
            <div className="page-list" ref={listRef}>
                {
                page.map((item)=>{
                    return(<ScrollPage key={item.id} id={item.id} title={item.title} desc={item.desc} imgName={item.imgName}/>)
                })    
                }
            </div>
        </div>
    </section>
  )
}

export default SlideView