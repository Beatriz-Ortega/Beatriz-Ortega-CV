import { Icons } from './components/Icons';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SeccionSobreMi } from './components/SectccionSobreMi';
import { SeccionSobreHabilidades } from './components/SectccionHabilidades';
import { SeccionSobreEducacion } from './components/SectccionEducacion';
import { SeccionPortafolio } from './components/SectccionPortafolio';
import { SeccionSobreExperiencia } from './components/SectccionExperiencia';
import './styles.css'

function Curriculum() {

    return(
    <>    
    <header>
        <div className="icon_menu"></div>
        <div className="scroll-line"></div>
    </header>

    <Navbar/>
    
    <div id="Nombre"></div>

        <section  className='container name_cv'>
            <div className='row my-5'>
                <div className=' col-12 d-lg-flex text-center name_cv_text d-block justify-content-center mt-lg-5'> 
                    <p className='text-nombre-color'>B<spam className="text-body-tertiary">eatriz</spam></p>
                    <p className='text-nombre-color ps-lg-4'>O<spam className="text-body-tertiary">rtega</spam></p>
                </div>
                <div className='mb-2 mt-4'>
                    <div className="h1-first d-flex justify-content-center">
                        {/* <hr /> */}
                        <span className="typewriter fs-5"></span>
                        {/* <hr /> */}
                    </div>
                </div>
                <div className='col-12 my-3'>
                    <Icons styles='d-flex justify-content-center align-items-center'/>
                </div>
            </div>
        </section>

        <SeccionSobreMi/>
        <SeccionSobreExperiencia/>
        <SeccionSobreEducacion/>
        <SeccionSobreHabilidades/>
        <SeccionPortafolio/>            
            
        
        <Footer/>
    </>
        
  )
}
export default Curriculum

