import { useState } from "react";
import { projectsData } from "../data/cvData"

export const SeccionPortafolio = () => {
    const [selectImg, setSelectImg] = useState('');

    
    const changeStyles = (selectProject, index) => {
        
        projectsData.filter( p => {

            if(p.title === selectProject.title){
                setSelectImg(document.getElementById(`${index}`));

                if(selectImg){
                    selectImg.classList.remove("img_project_remove")
                    selectImg.classList.add("img_project")
                }else{
                    let temporal = document.getElementById(`${index}`)
                    temporal.classList.remove("img_project_remove")
                    temporal.classList.add("img_project")
                }
                
                
            }
        })
    }           
    const changeStylesDefault = () => {
        selectImg.classList.remove("img_project");
        selectImg.classList.add("img_project_remove");
        setSelectImg('')
    }

  return (    
    <section className='container sobre_proyectos-contenedor' id="Proyectos">
        <div className="row sobre_proyectos">
            <div className="col-12">
                <h2 className='fw-bold text-center pt-5 pb-5 sobre_educacion_text text-body-tertiary d-flex justify-content-center'>
                    <p className="text-nombre-color">P</p>ortafolio.</h2>
            </div>
            <div className='col-12 d-flex flex-wrap gap-3 justify-content-center'>
                    
                { projectsData.map( (project, index) => (    
                    <div key={project.title} className="d-flex flex-wrap">
                        <div className="col-12 col-md-6">
                            <div className="tamaño-card-portafolio my-4 mx-auto text-center">
                                <div className='contenedor_project'>
                                    <img 
                                        id={index}
                                        src={project.img} 
                                        className={`card-img-top text-center}`}
                                        alt={project.alt}/>
                                </div>
                                <div className=" card card-body">
                                    <h5 className="card-title fw-bold text-start">{project.title}</h5>
                                    <p className="card-text text-body-tertiary text-start project_description mb-1">{project.description}</p>
                                    <p className="card-text text-start fw-bold">tecnologias</p>
                                    <div className='mb-3 text-start'>
                                        {
                                            (project.tech.javascript) && <i className="fa-brands fa-square-js fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.bootstrap) && <i className="fa-brands fa-bootstrap fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.nodeJs) && <i className="fa-brands fa-node-js fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.sass) && <i className="fa-brands fa-sass fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.react) && <i className="fa-brands fa-react fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.css) && <i className="fa-brands fa-css3 fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                        {
                                            (project.tech.html) && <i className="fa-brands fa-html5 fa-xl me-3" style={{ color: 'black'}}></i>
                                        }
                                    </div>
                                    <a href={ project.ref } target='_blanck' >
                                        <button 
                                            onMouseEnter={() => changeStyles(project, index)} 
                                            className="btn color-boton btn_visit"
                                            onMouseLeave={changeStylesDefault}
                                        >
                                            Visitar
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
