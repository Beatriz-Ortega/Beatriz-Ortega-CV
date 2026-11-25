import { educationData, profile } from '../data/cvData'
import { Education } from './Education'

export const SeccionSobreEducacion = () => (
  <section className="sobre_educacion_contenedor" id="Educacion">
    <div className="container text-center sobre_educacion">
      <div className="row">
        <div className="col-12">
          <h2 className="fw-bold text-center pt-5 pb-5 text-body-tertiary d-flex justify-content-center sobre_educacion_text">
            <span className="text-nombre-color mb-3">E</span>ducación.
          </h2>
        </div>
        <ul className="mb-4 col-12 list-unstyled d-flex flex-column align-items-start">
          {educationData.map(({ course, institute, year }) => (
            <Education key={course} title={course} detail={`${institute} · ${year}`} />
          ))}
          <Education title="Idiomas" detail={profile.languages} />
        </ul>
      </div>
    </div>
  </section>
)
