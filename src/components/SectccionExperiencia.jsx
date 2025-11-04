import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { experienciaData } from "../data/cvData"
//import { Education } from "./Education"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const SeccionSobreExperiencia = () => {

  return (    
    <section className="sobre_experiencia_contenedor" id="Experiencia">
        <div className="container text-center sobre_experiencia">
            <div className='row'>
                <div className='col-12'>
                    <h2 className='fw-bold text-center pt-5 pb-5 d-flex justify-content-center sobre_experiencia_text'>Experiencia.</h2>
                </div>
                <div className='mb-2 px-0 col-12 d-flex justify-content-center align-items-center experiencia_contenido'>
                  <div className="col-12">
                    <div className="swiper-wrapper-fix">
                      <Swiper
                        modules={[Pagination, A11y]}
                        pagination={{ el: ".pagination", clickable: true }}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={false}
                        centeredSlides={false}
                        slidesOffsetBefore={20}
                        slidesOffsetAfter={20}
                        breakpoints={{
                          0: { slidesPerView: 1 },
                          768: { slidesPerView: 2 },
                          1024: { slidesPerView: 3 },
                          1440: { slidesPerView: 4 }
                        }}
                      >
                        {experienciaData.map((data, index) => (
                          <SwiperSlide key={index}>
                            <div className="card border-light mb-5 mx-auto">
                              <div className="card-header">
                                <h5>{data.subtitle}</h5>
                                <p>{data.fecha}</p>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div> 

                  {/*<Swiper
                    // install Swiper modules
                    centerMode={false}
                    modules={[Pagination, A11y, Autoplay]}
                    autoplay={{
                      delay:3000,
                    }}
                    pagination={{ 
                      clickable: true 
                    }}
                    loop={false}
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                      "@0.00":{
                        slidesPerView:1,
                      },
                      "@0.50":{
                        slidesPerView:1.5,
                      },
                      "@1.00":{
                        slidesPerView:2,
                      },
                      "@1.25":{
                        slidesPerView:3,
                      },
                      "@1.50":{
                        slidesPerView:4,
                      },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                    {experienciaData.map((data,index)=>(
                      <SwiperSlide key={index}>
                        <div className="card border-light mb-5 mx-auto">
                          <div className="card-header">
                            <h5>{data.subtitle}</h5>
                            <p>{data.fecha}</p>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>*/}
                </div>
                {/*<div className="pagination"></div>*/}
            </div>
        </div>
    </section>
  )
}
