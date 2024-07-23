import { useEffect, useRef, useState } from "react";
import video from "../assets/Introfilm-HD-KeyVisual.mp4";

const Hero = () => {
  const [text, setText] = useState("Aqua Verde");
  const [isChanging, setIsChanging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChanging(true);
      setTimeout(() => {
        setText("un nuevo mundo");
        setIsChanging(false);
      }, 750); // Espera a que se desvanezca antes de cambiar el texto
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  // UseEffect para repetir el video entre espacios de tiempo

  useEffect(() => {
    const handleVideoEnded = () => {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 10000); // Retraso de 10 segundos antes de repetir el video
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <header className="hero">
      <video ref={videoRef} src={video} autoPlay muted />
      <h1 className={`fade-text ${isChanging ? "fade-out" : "fade-in"}`}>
        {text}
      </h1>
    </header>
  );
};

export default Hero;
