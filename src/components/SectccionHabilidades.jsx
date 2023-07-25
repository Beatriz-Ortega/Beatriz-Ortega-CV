import { habilitysData } from "../data/cvData"
import { Habilidades } from "./Habilidades"

export const SeccionSobreHabilidades = () => {
  return (
    <section className="sobre_habilidades_contenedor" id="Habilidades">
    <div className="container text-center sobre_habilidades">
        <div className='row justify-content-center'>
            <div className='col-12 text-start fs-5'>
                <h2 className='fw-bold text-center mt-5 mb-5 sobre_habilidades_text'>Habilidades.</h2>
                <p className='text-center text-light'> Tengo conocimientos en las siguientes tecnologías. </p>
                <div className='d-flex flex-wrap'>
                {
                    habilitysData.map( hability => (
                        <div key={hability.name} className="col-3 text-center"><Habilidades hability={hability}/></div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
