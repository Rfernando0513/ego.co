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

          <a
            href="https://wa.me/5511914100225?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20personalizada%20para%20o%20meu%20negócio.%20Posso%20te%20passar%20algumas%20informações?"
            target="_blank"
            rel="noopener noreferrer"
            className="Banner-button"
          >
            PROPOSTA PERSONALIZADA
          </a>

        </div>


        <div className="Banner-images">
          <img className="Banner-img img-left" src="/img/mockup-prancheta.png" alt="mulher com a prancheta" />
          <img className="Banner-img img-right" src="/img/mockup-banner.png" alt="mulher sorrindo com o celular na mão" />
        </div>

      </div>
      <img src="/img/Rectangle-Bottom.png" alt="" className="triangle-bottom" />
    </section>
  );
}

export default Banner;