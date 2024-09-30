import { useEffect, useRef, useState } from "react";
import video from "../assets/Introfilm-HD-KeyVisual.mp4";
import videoMovil from "../assets/Introfilm-HD-KeyVisual-mobile.mp4"
import Formulario from "./Formulario";

const Hero = () => {
  const [text, setText] = useState("Aqua verde Condominio Campestre es el lugar perfecto para tu hogar");
  const [isChanging, setIsChanging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChanging(true);
      setTimeout(() => {
        setText("Experimenta la exclusividad de un proyecto con lago privado, a pocos minutos de Medellín");
        setIsChanging(false);
      }, 950); // Espera a que se desvanezca antes de cambiar el texto
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
      <video className="videoHero" ref={videoRef} src={video} autoPlay muted />
      <video className="videoHeroMovil" ref={videoRef} src={videoMovil} autoPlay muted />
      <div className="titulo relative">
        <h1 className={`fade-text ${isChanging ? "fade-out" : "fade-in"} hero-text`}>
        {text}
      </h1>
      <Formulario/>
      </div>
    </header>
  );
};

export default Hero;
