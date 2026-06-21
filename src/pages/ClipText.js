import { useGSAP } from "@gsap/react"
import "../styles/cliptxt.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";
import img01 from "../assets/imgi_12_main_plai.png"
import img02 from "../assets/imgi_13_main_oneteam.png"
gsap.registerPlugin(useGSAP,ScrollTrigger);
const ClipText = () => {
        const containerRef =useRef(null);
        useGSAP(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    pin: false,
                    markers: false,
                }
            });

            tl.fromTo('.mask-layer', {
                clipPath: 'inset(100% 100% 100% 100%)'
            }, {
                clipPath: 'inset(0% 0% 0% 0%)',
                ease: 'none'
            })
            .fromTo('.mask-layer img', {
                width: 0,
                scale: 0,
            }, {
                width: 'auto',
                scale: 1,
                ease: 'none'
            }, "<")
            .to('.color-txt', {
                color: '#0022ff'
            }, ">");
        }, { scope: containerRef });
    
  return (
    <section id="clip-text" ref={containerRef}>
        <div className="mask-layer">
            <div className="text-content">
                <p>그 동안 고객과 셀러의 연결성을 강화하기 위해</p>
                <p>독립적이고 자율적인 연합군처럼 움직여 왔지만</p>
                <div className="text-wrap">
                    <div>
                        <span className="color-txt">생성형 AI 플레이</span>
                        <img src={img01} alt="생성형 AI 플레이"/>를
                    </div> 
                    <div>
                        <span>
                        기반으로 한<br className="mobile-br"/> 
                        <span className="color-txt">One Team</span>
                        <img src={img02} alt="One Tema"/>
                        으로서
                        </span>
                    </div>
                </div>
                        <p>시너지 극대화에 <br className="mobile-br"/>최선을 다하고 있습니다.</p>
            </div>
        </div>
    </section>
  )
}

export default ClipText