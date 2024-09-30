import "../index.css"
import FormularioFooter from "./FormularioFooter"

const Footer = () => {
  return (
    <div className="footer">
      <FormularioFooter/>
      <div className="footer_Row1">
          <div>
            <p>Contactanos</p>
            <button type="button">Email</button>
          </div>
          <div>
          <p>Donde encontrarnos</p>
          <button type="button">Abrir Mapa</button>
          </div>
          <div>
          <p>Redes</p>
          <div>
            Facebook
          </div>
          <div>
            Instagram
          </div>
          </div>
          <div>
          <p>Brochure</p>
          <button type="button">Descargar</button>
          </div>
      </div>
      <div className="footer_Row2">
        <div><p>Copyright © 2024 AQUAVERDE® Todos los derechos reservados.</p></div>
        <div><p>Desarrolo y Diseño ♡ INVENTEK®</p></div>
      </div>
    </div>
  )
}

export default Footer