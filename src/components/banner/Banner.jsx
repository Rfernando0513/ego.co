import "./Banner.css";

function Banner() {
  return (
    <section className="Banner">
      <div className="Banner-container">

        <div className="Banner-text">
          <h1>
            Gestão que nutre <br />
            Qualidade que transforma.
          </h1>

          <p>
            Soluções em nutrição corporativa para empresas que valorizam
            pessoas e resultados.
          </p>

          <button className="Banner-button">
            PROPOSTA PERSONALIZADA
          </button>
        </div>


        <div className="Banner-images">
          <img className="Banner-img img-left" src="/img/mockup-prancheta.png" alt="mockup" />
          <img className="Banner-img img-right" src="/img/mockup-banner.png" alt="mockup" />
        </div>

      </div>
    </section>
  );
}

export default Banner;