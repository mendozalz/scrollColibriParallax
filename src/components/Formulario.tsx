import { useEffect, useRef } from "react";
import anime from 'animejs';
import "../formulario.css";

const Formulario = () => {
  const animationRef = useRef<anime.AnimeTimelineInstance | null>(null);

  useEffect(() => {
    const ml4 = {
      opacityIn: [0,1],
      scaleIn: [0.7, 1],
      scaleOut: 1.1,
      durationIn: 800,
      durationOut: 600,
      delay: 2500
    };

    animationRef.current = anime.timeline({loop: true})
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });

    return () => {
      if (animationRef.current) animationRef.current.pause();
    };
  }, []);
  return (
    <form>
      <section className="segment">
        <h1 className="tituloForm ml4">
          <span className="letters letters-1">Con nosotros, tu inversión es sinónimo de seguridad y valorización.</span>
          <span className="letters letters-2">¿Estás listo para adquirir tu lote campestre en Aqua Verde?</span> 
        </h1>
      </section>

      <label>
        <input type="text" placeholder="Nombre completo" />
      </label>
      <label>
        <input
          type="number"
          min="3"
          max="10"
          placeholder="Número de teléfono"
        />
      </label>
      <label>
        <input type="email" placeholder="Correo electrónico" />
      </label>
      <button className="red" type="button">
        <i className="icon ion-md-lock"></i> Enviar
      </button>
    </form>
  );
};

export default Formulario;
