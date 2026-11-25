import PropTypes from 'prop-types'

export const Habilidades = ({ title, skills, icon: Icon }) => (
  <li className="col-6 col-lg-3 text-center text-light px-2 mt-4 mb-4">
    <Icon className="sobre_habilidades_img" size="2em" aria-hidden="true" />
    <h3 className="h6 fw-bold mt-3">{title}</h3>
    <p className="small mb-0">{skills}</p>
  </li>
)

Habilidades.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
}
