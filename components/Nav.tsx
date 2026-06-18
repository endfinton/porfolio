export function Nav() {
  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <a className="site-nav__brand" href="#top">
          ~/Luis Lluy
        </a>

        <nav className="site-nav__links" aria-label="Principal">
          <a href="#projects">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#about">Sobre mi</a>
        </nav>
      </div>
    </header>
  );
}
