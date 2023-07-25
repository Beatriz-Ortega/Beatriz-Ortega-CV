
export const Education = ({education}) => {
  return (
        <div className="d-flex educacion_contenido" key={education.course}>
          <i className="fas fa-chevron-right fa-1x mt-1"></i>
          <p className="text-color-principal text-start ps-2"> <span className="text-nombre-educacion">{education.course} </span>{education.institute} {education.date}</p>
        </div>
  )
}
