
export const List = ({title, href}) => {
  return (
    <li className="nav-item link_hover">
        <a className="nav-link active text-white hover_link"  aria-current="page" href={href}>{title}</a>
    </li>
  )
}
