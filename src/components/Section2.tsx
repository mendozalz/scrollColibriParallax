import { Parallax} from "react-scroll-parallax"
import ramaDerecha from "../assets/rama_derecha.png"
import hojasAbajo from "../assets/hojas_abajo.png"

const Section2 = () => {
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
          <img className="hojas_derecha2" src={ramaDerecha} alt="hojas de arbol" />
           <img className="hojas_abajo" src={hojasAbajo} alt="hojas de arbol" />
    </section>
  )
}

export default Section2