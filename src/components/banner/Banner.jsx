import "./Banner.css";

function Banner() {
  return (
    <section className="Banner">
      <img src="/img/Rectangle-Top.png" alt="" className="triangle-top" />
        <div className="Banner-container">
          <div className="Banner-text">
            <h1>
              Gestão que nutre <br />
              Qualidade que transforma.
            </h1>

            <p>
              Soluções em nutrição corporativa para <br />
              empresas que valorizam pessoas e resultados.
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
      <img src="/img/Rectangle-Bottom.png" alt="" className="triangle-bottom" />  
    </section>
  );
}

export default Banner;