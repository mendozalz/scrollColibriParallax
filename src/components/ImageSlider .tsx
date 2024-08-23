import { useState, useEffect, useRef } from 'react';
import '../ImageSlider .css';
import hojasDerecha from "../assets/hojas_derecha.png";

interface Slide {
  background: string;
  icon: string;
  sub: string;
}

const ImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    { background: 'https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359223/IMAGINARIOS_URBANISMO_1_aglkau.jpg', icon: './favicon.jpg', sub: 'Urbanismo de Primer Nivel Seguridad 24/7' },
    { background: 'https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_2_kkxoh7.jpg', icon: './favicon.jpg', sub: 'Senderos ecológicos' },
    { background: 'https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_3_jmusnz.jpg', icon: './favicon.jpg', sub: 'Lago Privado' },
    { background: 'https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359406/IMAGINARIOS_URBANISMO_5_lqbmi1.jpg', icon: './favicon.jpg', sub: 'Cercanía a la ciudad' },
    { background: 'https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_4_ud0qgx.jpg', icon: './favicon.jpg', sub: 'Vías en excelente estado' }
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const handleSlideClick = (index: number): void => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
  };

  return (
    <div className="mainCard">
        <div className="banner">
          <p>Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo...</p>
        </div>
        <div className='mainCard_titulo'>
          <h2>
          ¿Que es Condominio Aquaverde?
          </h2>
          <p>Es un espacio exclusivo con <b>41 lotes</b> campestres en un exclusivo condominio campestre con lotes que van desde los <b>1500m2</b> hasta los <b>1900m2</b></p>
        </div>
        <img className="hojas_derecha1" src={hojasDerecha} alt="hojas de arbol" />
      <div className="containerExpandCard">
        <div className="cont">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : 'nonActive'}`}
              style={{ backgroundImage: `url(${slide.background})` }}
              onClick={() => handleSlideClick(index)}
            >
              <div className="slide-content">
                <div className="icon"><img src={slide.icon} alt="Icon" className="slide-icon" /></div>
                <div className="info">
                  <p className="sub">{slide.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;