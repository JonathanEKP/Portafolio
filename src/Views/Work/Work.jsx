import Cards from "../../Components/Cards/Cards";
import portafolio from "../../images/portafolio.png";
import cinemafix from "../../images/cinemafix.png";
import universe from "../../images/Universe.png";
import weather from "../../images/weather.png";

function Work() {
  return (
    <div className="sec3 seccion work container" id="work">
      <div className="row">
        <div className="col-12 mt-4">
          <h1 className="text-danger h1 text-center display-6">Experiencia</h1>
        </div>
        <div className="col-12 py-3">
          <p className="text-light text-center">
            Actualmente no cuento con experiencia laboral como desarrollador o
            programador pero, constantemente estoy aprendiendo sobre tecnologias
            para poder incrementar mis habilidades.
          </p>
          <p className="text-light text-center">
            A continuación mostraré algunos de mis proyectos personales
            realizados, además podrás visitar el sitio web y su codigo en github
          </p>
        </div>
      </div>

      <div className="row g-0 d-flex justify-content-center pb-4">
        <Cards>
          <img
            src={portafolio}
            className="card-img-top"
            alt="Portafolio Imagen"
            id="card-img"
          />
          <div className="card-body rounded-bottom-1">
            <p className="card-title text-danger">Portafolio</p>
            <p className="card-text text-white">
              <i className="bi bi-dash-lg"></i>Información
            </p>
            <div className="">
              <a
                href="https://github.com/JonathanEKP/Portafolio"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-github text-danger"></i>
              </a>
              <a
                href="https://jonathanekp.github.io/Portafolio/"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-browser-chrome text-danger"></i>
              </a>
            </div>
          </div>
        </Cards>

        <Cards>
          <img
            src={cinemafix}
            className="card-img-top"
            alt="Cinemafix Imagen"
            id="card-img"
          />
          <div className="card-body rounded-bottom-1">
            <p className="card-title text-danger">CinemaFix</p>
            <p className="card-text text-white">
              <i className="bi bi-dash-lg"></i>Diversión, Peliculas
            </p>
            <div className="">
              <a
                href="https://github.com/JonathanEKP/CinemaFix"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-github text-danger"></i>
              </a>
              <a
                href="https://jonathanekp.github.io/CinemaFix/"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-browser-chrome text-danger"></i>
              </a>
            </div>
          </div>
        </Cards>
        <Cards>
          <img
            src={universe}
            className="card-img-top"
            alt="Universe Imagen"
            id="card-img"
          />
          <div className="card-body rounded-bottom-1">
            <p className="card-title text-danger">Universe</p>
            <p className="card-text text-white">
              <i className="bi bi-dash-lg"></i>Información, Astronomia
            </p>
            <div className="">
              <a
                href="https://github.com/JonathanEKP/Universe"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-github text-danger"></i>
              </a>
              <a
                href="https://jonathanekp.github.io/Universe/"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-browser-chrome text-danger"></i>
              </a>
            </div>
          </div>
        </Cards>
        <Cards>
          <img
            src={weather}
            className="card-img-top"
            alt="Weather Imagen"
            id="card-img"
          />
          <div className="card-body rounded-bottom-1">
            <p className="card-title text-danger">
              Weather Web Information
            </p>
            <p className="card-text text-white">
              <i className="bi bi-dash-lg"></i>Información, Clima, Tiempo
            </p>
            <div className="">
              <a
                href="https://github.com/JonathanEKP/weatherApp"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-github text-danger"></i>
              </a>
              <a
                href="https://jonathanekp.github.io/weatherApp/"
                target="_blank"
                className="cardIcons m-1"
              >
                <i className="bi bi-browser-chrome text-danger"></i>
              </a>
            </div>
          </div>
        </Cards>
      </div>
    </div>
  );
}

export default Work;
