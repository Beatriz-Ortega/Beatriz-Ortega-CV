import {
  FaAngular, FaDatabase, FaDocker, FaJira, FaJsSquare,
  FaLayerGroup, FaMobileAlt, FaNode, FaVial,
} from 'react-icons/fa'
import { skillsData } from '../data/cvData'
import { Habilidades } from './Habilidades'

const icons = {
  languages: FaJsSquare,
  frontend: FaAngular,
  state: FaLayerGroup,
  mobile: FaMobileAlt,
  backend: FaNode,
  databases: FaDatabase,
  devops: FaDocker,
  testing: FaVial,
  methods: FaJira,
}

export const SeccionSobreHabilidades = () => (
  <section className="sobre_habilidades_contenedor" id="Habilidades">
    <div className="container text-center sobre_habilidades">
      <div className="row justify-content-center">
        <div className="col-12 text-start fs-5">
          <h2 className="fw-bold text-center mt-5 mb-5 sobre_habilidades_text">Habilidades.</h2>
          <ul className="list-unstyled d-flex flex-wrap mb-0 pb-3">
            {skillsData.map(({ title, skills, category }) => (
              <Habilidades key={category} title={title} skills={skills} icon={icons[category]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)
