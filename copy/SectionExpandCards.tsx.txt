import { useState, useEffect } from 'react';
import hojasDerecha from "../assets/hojas_derecha.png";
import '../ExpandingFlexCards.css';

interface CustomCSSProperties extends React.CSSProperties {
  '--optionBackground'?: string;
}


const SectionExpandCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359223/IMAGINARIOS_URBANISMO_1_aglkau.jpg)', icon: './favicon.jpg', main: 'Texto 1', sub: 'Subtexto 1' },
    { background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_2_kkxoh7.jpg)', icon: './favicon.jpg', main: 'Texto 2', sub: 'Subtexto 2' },
    { background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_3_jmusnz.jpg)', icon: './favicon.jpg', main: 'Texto 3', sub: 'Subtexto 3' },
    { background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359406/IMAGINARIOS_URBANISMO_5_lqbmi1.jpg)', icon: './favicon.jpg', main: 'Texto 4', sub: 'Subtexto 4' },
    { background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_4_ud0qgx.jpg)', icon: './favicon.jpg', main: 'Texto 5', sub: 'Subtexto 5' }
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 478); 
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cambio automático de tarjetas cada 3 segundos
  useEffect(() => {
    let interval:any;
    if (isMobile) { 
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isMobile, cards.length]);

  return (
    <div className="mainCard">
      <div className="banner">
        <p>Pon rumbo a tu hogar ideal en Marinilla Antioquia ahora mismo...</p>
      </div>
      <img className="hojas_derecha1" src={hojasDerecha} alt="hojas de arbol" />
      <div className="options">
        {cards.map((card, index) => (
          <div
          key={index}
          className={`option ${index === activeIndex ? 'active' : ''} ${isMobile ? (index === activeIndex ? 'show' : 'hidden') : ''}`} 
          style={{ '--optionBackground': card.background } as CustomCSSProperties}
          onClick={() => setActiveIndex(index)}
        >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <img src={card.icon} alt="icono de la marca" />
              </div>
              <div className="info">
                <div className="main">{card.main}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionExpandCards;
