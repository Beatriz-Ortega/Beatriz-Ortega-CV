import { FaAngular, FaCss3, FaHtml5, FaJsSquare, FaReact, FaSass } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { projectsData } from '../data/cvData'

const technologyIcons = {
  JavaScript: FaJsSquare,
  Sass: FaSass,
  React: FaReact,
  CSS: FaCss3,
  HTML: FaHtml5,
  Angular: FaAngular,
  TypeScript: SiTypescript,
}

export const SeccionPortafolio = () => (
  <section className="container sobre_proyectos-contenedor" id="Proyectos">
    <div className="row sobre_proyectos">
      <div className="col-12">
        <h2 className="fw-bold text-center pt-5 pb-5 sobre_educacion_text text-body-tertiary d-flex justify-content-center">
          <span className="text-nombre-color mb-3">P</span>ortafolio.
        </h2>
      </div>
      <div className="col-12 d-flex flex-wrap gap-3 justify-content-center">
        {projectsData.map(({ title, description, url, image, technologies }) => (
          <article key={title} className="tamaño-card-portafolio my-4 text-center">
            <div className="contenedor_project">
              <img
                src={import.meta.env.BASE_URL + image}
                className="card-img-top text-center"
                width="192"
                height="192"
                loading="lazy"
                decoding="async"
                alt=""
              />
            </div>
            <div className="card card-body">
              <h3 className="card-title h5 fw-bold text-start">{title}</h3>
              <p className="card-text text-body-tertiary text-start project_description mb-1">{description}</p>
              <p className="card-text text-start fw-bold">Tecnologías</p>
              <div className="mb-3 text-start text-black" role="img" aria-label={technologies.join(', ')}>
                {technologies.map(technology => {
                  const Icon = technologyIcons[technology]
                  return <Icon key={technology} className="me-3" size={24} aria-hidden="true" />
                })}
              </div>
              <div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn color-boton btn_visit"
                  aria-label={`Visitar ${title}`}
                >
                  Visitar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)
