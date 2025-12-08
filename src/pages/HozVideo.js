import "../styles/HozVideo.css";
import videoData from "../assets/main_slate.mp4";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
const HozVideo = () => {
   const containerRef = useRef(null);
    const videoRef = useRef(null);
    useGSAP (()=>{
    const tl = gsap.timeline();
    tl.to(videoRef.current,{
        height:'100vh',
    })
    .to(videoRef.current,{
        width:"80%",
        height:"80vh",
        borderRadius:'4rem'
    });
    ScrollTrigger.create({
        animation: tl,
        height:'100vh',
        ease:'none',
            trigger:containerRef.current,
            start:"center center",
            end:'+=3000',
            scrub:1,
            pin: true,
            markers:true
            
        });
    },{scope:containerRef});
    
    
    
  return (
    <section id="hoz-video">
        <h2>이커머스가 연결되고 변화해서</h2>
        <div className="video-wrap" ref={containerRef}>
            <video loop autoPlay muted ref={videoRef}>
                <source src={videoData} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default HozVideo