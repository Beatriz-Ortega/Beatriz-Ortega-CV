import PropTypes from 'prop-types'
import { FaChevronRight } from 'react-icons/fa'

export const Education = ({ title, detail }) => (
  <li className="d-flex educacion_contenido">
    <FaChevronRight className="mt-1" aria-hidden="true" />
    <p className="text-color-principal text-start ps-2">
      <strong className="text-nombre-educacion">{title}</strong> · {detail}
    </p>
  </li>
)

Education.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}
