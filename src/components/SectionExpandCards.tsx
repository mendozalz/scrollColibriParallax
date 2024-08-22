import { useState } from 'react';
import hojasDerecha from "../assets/hojas_derecha.png";
import '../ExpandingFlexCards.css';

interface CustomCSSProperties extends React.CSSProperties {
  '--optionBackground'?: string;
}

const SectionExpandCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359223/IMAGINARIOS_URBANISMO_1_aglkau.jpg)',
      icon: './favicon.jpg',
      main: 'Urbanismo de Primer Nivel Seguridad 24/7',
      sub: 'Omuke trughte a otufta'
    },
    {
      background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_2_kkxoh7.jpg)',
      icon: './favicon.jpg',
      main: 'Senderos ecológicos',
      sub: 'Omuke trughte a otufta'
    },
    {
      background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_3_jmusnz.jpg)',
      icon: './favicon.jpg',
      main: 'Lago Privado',
      sub: 'Omuke trughte a otufta'
    },
    {
      background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359406/IMAGINARIOS_URBANISMO_5_lqbmi1.jpg)',
      icon: './favicon.jpg',
      main: 'Cercanía a la ciudad',
      sub: 'Omuke trughte a otufta'
    },
    {
      background: 'url(https://res.cloudinary.com/dvuyt52aq/image/upload/v1724359405/IMAGINARIOS_URBANISMO_4_ud0qgx.jpg)',
      icon: './favicon.jpg',
      main: 'Vías en excelente estado',
      sub: 'Omuke trughte a otufta'
    }
  ];

  return (
    <div className="mainCard">
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
        <div className="options">
          {cards.map((card, index) => (
            <div
              key={index}  // <-- Aquí agregas el key único
              className={`option ${index === activeIndex ? 'active' : ''}`}
              style={{ '--optionBackground': card.background } as React.CSSProperties}
              onClick={() => setActiveIndex(index)}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <img src={card.icon} alt="icono de la marca" />
                </div>
                <div className="info">
                  <div className="main">{card.main}</div>
                  {/* <div className="sub">{card.sub}</div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default SectionExpandCards;
