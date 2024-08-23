import SVGComponent from "./SVGComponent";
import hojasAbajo from "../assets/hojas_abajo.png"

const MapaSVG = () => {
  return (
    <div className="MapaSvg">
      <section className="sectionMap">
        <h1>Aqua Verde</h1>
        <h2>Lotes Disponibles</h2>
      </section>
      <SVGComponent />
      <img className="MapaSvg_hojas_abajo" src={hojasAbajo} alt="hojas de arbol" />
    </div>
  );
};

export default MapaSVG;
