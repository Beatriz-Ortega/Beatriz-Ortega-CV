import { List } from "./ListComponent"

export const Navbar = () => {
  return (

        <div className="container fixed-top navbar-color">
            <div className="row">
                <div className="col-12">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler text-white color fs-4 hover_link me-5 ms-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">BO</button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav color">
                            <List title='Experiencia' href='#Experiencia'/>
                            <List title='Educación' href='#Educacion'/>
                            <List title='Habilidades' href='#Habilidades'/>
                            <List title='Portafolio' href='#Proyectos'/>
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        </div>
    
  )
}
