import { useRef } from 'react'
import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { experienceData } from '../data/cvData'
import 'swiper/css'

const modules = [A11y]

export const SeccionSobreExperiencia = () => {
  const carousel = useRef(null)

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      carousel.current.swiper.slidePrev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      carousel.current.swiper.slideNext()
    }
  }

  return (
    <section className="sobre_experiencia_contenedor" id="Experiencia">
      <div className="container text-center sobre_experiencia">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold text-center pt-5 pb-5 d-flex justify-content-center sobre_experiencia_text">
              Experiencia.
            </h2>
          </div>
          <div className="mb-2 px-0 col-12 experiencia_contenido" onKeyDown={handleKeyDown}>
            <Swiper
              ref={carousel}
              modules={modules}
              slidesPerView="auto"
              spaceBetween={20}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              tabIndex={0}
              role="region"
              aria-label="Carrusel de experiencia laboral"
            >
              {experienceData.map(({ company, title, dates, description }) => (
                <SwiperSlide key={company}>
                  <article className="card border-light mb-5 mx-auto">
                    <div className="card-header">
                      <h3 className="h5">{company}</h3>
                      <p className="mb-0">{dates}</p>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title h5">{title}</h4>
                      <p className="card-text">{description}</p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
