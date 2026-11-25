import { profile } from '../data/cvData'

export const SeccionSobreMi = () => (
  <section className="container text-center sobre_mi">
    <div className="row justify-content-center">
      <div className="col-12 fs-5 mt-5">
        <h2 className="fw-bold text-start mt-5 sobre_mi_text text-body-tertiary d-flex">
          <span className="text-nombre-color mb-3">S</span>obre mí
        </h2>
        <p className="mt-4 text-start">{profile.summary}</p>
        <p className="text-start">{profile.focus}</p>
        <p className="text-start">
          {profile.location} · <a className="tag_link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </div>
  </section>
)
