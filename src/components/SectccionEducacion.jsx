import { educationData } from "../data/cvData"
import { Education } from "./Education"

export const SeccionSobreEducacion = () => {
  return (    
    <section className="sobre_educacion_contenedor" id="Educacion">
        <div className="container text-center sobre_educacion">
            <div className='row'>
                <div className='col-12'>
                    <h2 className='fw-bold text-center pt-5 pb-5 text-body-tertiary d-flex justify-content-center sobre_educacion_text'>
                        <p className='text-nombre-color'>E</p>ducación.</h2>
                </div>
                <div className='mb-4 col-12 d-flex flex-column justify-content-center align-items-start'>
                    {
                        educationData.map( education => (
                            <Education key={education.course} education={education}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
