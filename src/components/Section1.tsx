import { Parallax } from "react-scroll-parallax";

const Section1 = () => {
  return (
    <section className="section1">
      <img
        className="hojas_derecha1"
        src="./src/assets/hojas_derecha.png"
        alt="hojas de arbol"
      />
      {/* <video src={video} autoPlay muted loop/> */}
      <Parallax scale={[0.6, 1]} translateX={[-20, 20, 'easeIn']}>
          <img
            className="personas"
            src="./src/assets/personas_compartiendo.jpg"
            alt="personas compartiendo"
          />
      </Parallax>
    </section>
  );
};

export default Section1;
