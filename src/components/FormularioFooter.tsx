const FormularioFooter = () => {
  return (
    <>
        <form>
      <section className="formSection">
        <h1 className="formSection_tituloForm">
          <span className="formSection_tituloForm_letters">
            Con nosotros, tu inversión es sinónimo de seguridad y valorización.
          </span>
          <span className="formSection_tituloForm_letters">
            ¿Estás listo para adquirir tu lote campestre en Aqua Verde?
          </span>
        </h1>
      </section>

      <label>
        <input type="text" placeholder="Nombre completo" />
      </label>
      <label>
        <input
          type="number"
          min="3"
          max="10"
          placeholder="Número de teléfono"
        />
      </label>
      <label>
        <input type="email" placeholder="Correo electrónico" />
      </label>
      <button className="formBtn" type="button">
        Enviar
      </button>
    </form>
    </>
  )
}

export default FormularioFooter