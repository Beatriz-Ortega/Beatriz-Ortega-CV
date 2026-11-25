import { Icons } from './components/Icons'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SeccionSobreMi } from './components/SectccionSobreMi'
import { SeccionSobreHabilidades } from './components/SectccionHabilidades'
import { SeccionSobreEducacion } from './components/SectccionEducacion'
import { SeccionPortafolio } from './components/SectccionPortafolio'
import { SeccionSobreExperiencia } from './components/SectccionExperiencia'
import { profile } from './data/cvData'
import './styles.css'

export default function Curriculum() {
  return (
    <>
      <Navbar />
      <main>
        <header className="container name_cv" id="Nombre">
          <div className="row my-5">
            <h1 className="col-12 d-lg-flex text-center name_cv_text d-block justify-content-center mt-lg-5 mb-0 fw-normal">
              <span className="visually-hidden">{profile.name}</span>
              <span className="text-nombre-color d-block mb-3" aria-hidden="true">B<span className="text-body-tertiary">eatriz</span></span>
              <span className="text-nombre-color ps-lg-4 d-block mb-3" aria-hidden="true">O<span className="text-body-tertiary">rtega</span></span>
            </h1>
            <div className="mb-2 mt-4 text-center">
              <div className="h1-first d-flex justify-content-center">
                <span className="visually-hidden">{profile.title} · {profile.degree}</span>
                <span className="typewriter fs-5" aria-hidden="true" data-title={profile.title} />
              </div>
              <p className="mt-2 mb-0">{profile.stack}</p>
            </div>
            <div className="col-12 my-3">
              <Icons styles="d-flex justify-content-center align-items-center" />
            </div>
          </div>
        </header>

        <SeccionSobreMi />
        <SeccionSobreExperiencia />
        <SeccionSobreEducacion />
        <SeccionSobreHabilidades />
        <SeccionPortafolio />
      </main>
      <Footer />
    </>
  )
}
