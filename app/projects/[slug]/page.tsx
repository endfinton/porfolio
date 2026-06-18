type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="container hero__inner">
          <span className="hero__eyebrow">Proyecto</span>
          <h1 className="hero__title">{slug}</h1>
          <p className="hero__copy">
            Esta pagina de detalle queda reservada para una fase posterior.
          </p>
        </div>
      </section>
    </main>
  );
}
