import PropTypes from 'prop-types'

export const List = ({title, href}) => {
  return (
    <li className="nav-item link_hover">
        <a className="nav-link active text-white hover_link" href={href}>{title}</a>
    </li>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
