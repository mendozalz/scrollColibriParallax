import { Parallax } from "react-scroll-parallax";
import personasCompartiendo from "../assets/personas_compartiendo.jpg";
import hojasDerecha from "../assets/hojas_derecha.png";
import SectionExpandCards from "./SectionExpandCards";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="banner">
        <p>
          Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo.
          Descubre la majestuosidad de Aqua Verde, un lugar que ofrece una
          experiencia de vida inigualable a un precio sumamente accesible.
          Explora sus encantos y encuentra el espacio perfecto para tu nuevo
          hogar
        </p>
      </div>
      <img className="hojas_derecha1" src={hojasDerecha} alt="hojas de arbol" />
      {/* <video src={video} autoPlay muted loop/> */}
      <Parallax scale={[0.6, 1]} translateX={[-20, 20, "easeIn"]}>
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
