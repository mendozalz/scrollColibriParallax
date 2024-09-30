import viviendas1 from "../../public/FACHADA_PRINCIPAL_LATERAL.jpg"
import viviendas2 from "../../public/FACHADA_PRINCIPAL_ACCESO.jpg"

const Section3 = () => {
  return (
    <section className="section3">
      <article>
        <h3>Lorem Ipsum</h3>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatem perferendis rerum, reiciendis temporibus nihil cumque
          exercitationem delectus, aliquam corporis earum, vel quisquam at illum
          labore eveniet provident nam voluptatibus! Asperiores illum qui
          repellendus eius veritatis ea deserunt sunt, impedit ut ratione odio
          cumque dolore facilis debitis perspiciatis molestiae officiis minima
          excepturi aliquam quae earum quos iure. Debitis, ratione blanditiis.
        </p>
      </article>
      <section className="section3_1">
        <div className="section3_1_img">
          <img src={viviendas1} alt="viviendas" />
        </div>
        <div className="section3_1_div">
          <article>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem perferendis rerum, reiciendis temporibus nihil cumque
              exercitationem delectus, aliquam corporis earum, vel quisquam at
              illum labore eveniet provident nam voluptatibus!
            </p>
            <button>Lorem Ipsum</button>
          </article>
        </div>
      </section>
      <section className="section3_2">
        <div className="section3_2_div">
          <article>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem perferendis rerum, reiciendis temporibus nihil cumque
              exercitationem delectus, aliquam corporis earum, vel quisquam at
              illum labore eveniet provident nam voluptatibus!
            </p>
            <button>Lorem Ipsum</button>
          </article>
        </div>
        <div className="section3_2_img">
          <img src={viviendas2} alt="viviendas" />
        </div>
      </section>
    </section>
  );
};

export default Section3;
