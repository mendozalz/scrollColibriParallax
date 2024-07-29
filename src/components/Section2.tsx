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
          scale: [0.6, 1, 'easeOutBack'],
        });
      }
    };

    handleResize(); // Call it initially
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
            <small>Subtitle</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora distinctio aliquid velit incidunt repellat quis cum impedit aperiam, natus, laudantium sed soluta voluptas. Repellat asperiores delectus dolorum sed praesentium.</p>
          </article>
        </Parallax>
      </div>
      <img className="hojas_derecha2" src={ramaDerecha} alt="hojas de arbol" ref={rama.ref}/>
      <img className="hojas_abajo" src={hojasAbajo} alt="hojas de arbol" />
    </section>
  )
}

export default Section2