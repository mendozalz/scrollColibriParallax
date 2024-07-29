import video from "../assets/Sektionfilm-2-HD-KeyVisual.mp4"
import videoMovil from "../assets/Sektionfilm-2-HD-KeyVisual-mobile.mp4"

const VIdeoBg = () => {
  return (
        <>
          <video className="videoColibri" src={video} autoPlay muted loop/>
          <video className="videoColibriMovil" src={videoMovil} autoPlay muted loop/>
        </>

  )
}

export default VIdeoBg