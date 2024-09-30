import { Parallax, useParallax } from "react-scroll-parallax"
import ramaDerecha from "../assets/rama_derecha.png"
import hojasAbajo from "../assets/hojas_abajo.png"
import { useEffect, useState } from "react";


const Section2 = () => {
  const [parallaxConfig, setParallaxConfig] = useState({
    translateY: [90, -50, 'easeInOut'],
    scale: [0.6, 1, 'easeOutBack'],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setParallaxConfig({
          translateY: [0, 220, 'easeInOut'],
          scale: [0.8, 1.5, 'easeOutBack'],
        });
      } else {
        setParallaxConfig({
          translateY: [90, -150, 'easeInOut'],
          scale: [0.8, 1, 'easeOutBack'],
        });
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rama = useParallax<HTMLDivElement>({
    translateY: parallaxConfig.translateY,
    scale: parallaxConfig.scale,
  });
  return (
    <section className='section2'>
      <div className="bloque">
        <Parallax scale={[0.6, 1]} >
          <article className="bloq">
            <small>Aqua Verde</small>
            <p>Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo. Descubre la majestuosidad de Aqua Verde, un lugar que ofrece una experiencia de vida inigualable a un precio sumamente accesible. Explora sus encantos y encuentra el espacio perfecto para tu nuevo hogar</p>
          </article>
        </Parallax>
      </div>
      <img className="hojas_derecha2" src={ramaDerecha} alt="hojas de arbol" ref={rama.ref}/>
      <img className="hojas_abajo" src={hojasAbajo} alt="hojas de arbol" />
    </section>
  )
}

export default Section2