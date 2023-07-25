import { Icons } from "./Icons"

export const Footer = () => {
  return (
    <footer className="container  text-center mb-2 sobre_footer">
        <div className='row'>
          <div className='col-12'>
            <h2 className='fw-bold sobre_footer_text'>Materializando ideas</h2>
            <p className='text-secondary mb-0'>Muchas gracias por visitar mi portafolio. No dudes en contactarme si me necesitas</p>
            <Icons styles='d-flex justify-content-center gap-4 mb-2'/>
            <hr/>
            <p className='text-secondary'>Elaborado por 🎖️ Beatriz Ortega.</p>
          </div>
        </div>
    </footer>
  )
}
