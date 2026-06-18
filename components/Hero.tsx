export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="hero__eyebrow">Disponible para trabajar</span>

        <h1 className="hero__title">
          Luis Lluy
          <span className="hero__cursor" aria-hidden="true" />
        </h1>

        <p className="hero__copy">
          Desarrollador junior terminando sus estudios de desarrollo. Recien titulado como Tecnico Superiror en Desarrollo Web (DAW) y finalizando el ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM). 
          <br />
          Me considero una persona proactiva, con ganas de aprender y crecer profesionalmente.
        </p>

        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#projects">
            Ver proyectos
          </a>
          <a className="hero__cta hero__cta--secondary" href="/cv.pdf">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
