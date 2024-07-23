import video from "../assets/Sektionfilm-2-HD-KeyVisual.mp4"

const VIdeoBg = () => {
  return (
        <video className="videoColibri" src={video} autoPlay muted loop/>
  )
}

export default VIdeoBg