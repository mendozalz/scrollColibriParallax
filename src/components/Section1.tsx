import { Parallax } from "react-scroll-parallax";
import personasCompartiendo from "../assets/personas_compartiendo.jpg"
import hojasDerecha from "../assets/hojas_derecha.png"

const Section1 = () => {
  return (
    <section className="section1">
      <img
        className="hojas_derecha1"
        src={hojasDerecha}
        alt="hojas de arbol"
      />
      {/* <video src={video} autoPlay muted loop/> */}
      <Parallax scale={[0.6, 1]} translateX={[-20, 20, 'easeIn']}>
          <img
            className="personas"
            src={personasCompartiendo}
            alt="personas compartiendo"
          />
      </Parallax>
    </section>
  );
};

export default Section1;
