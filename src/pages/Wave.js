import ClipText from "./ClipText"
import HozVideo from "./HozVideo"
import MainVideo from "./MainVideo"
import SlideView from "./SlideView"

const Wave = () => {
  return (
    <div id="wave">
      <MainVideo />
      <HozVideo/>
      <ClipText/>
      <SlideView/>
    </div>
  )
}

export default Wave