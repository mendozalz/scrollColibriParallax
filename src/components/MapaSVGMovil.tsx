import hojasAbajo from "../assets/hojas_abajo.png"
import SVGComponentMovil from "./SVGComponentMovil";

const MapaSVGMovil = () => {
  return (
    <div className="MapaSvgMovil">
      <section className="sectionMapMovil">
        <h1>Aqua Verde</h1>
        <h2>Lotes Disponibles</h2>
      </section>
      <SVGComponentMovil/>
      <img className="MapaSvgMovil_hojas_abajo" src={hojasAbajo} alt="hojas de arbol" />
    </div>
  );
};

export default MapaSVGMovil;
