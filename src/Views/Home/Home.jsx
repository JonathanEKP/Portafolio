import "./Home.css";
import Abierto from "../../images/abierto.png"
import pdf from '../../assets/CV-JonathanLarios.pdf'


function Home() {
  return (
    <section className="sec1 seccion home active text-white" id="home">
      <div className="row g-0 m-0">
        <div className="col-12 col-lg-5 g-0 py-2">
          <div className="d-flex justify-content-center">
            <img src={Abierto} alt="" className="bg-img" />
          </div>
        </div>

        <div className="col-12 col-lg-7 py-lg-5 mt-lg-5 g-0 ">
          <div className="text-center p-3">
            <h1 className="h1 display-6">
              Encantado de conocerte, soy Jonathan Larios.
            </h1>
            <p className="mt-1 py-3">
              Soy Jonathan,<span className="text-danger"> FrontEnd</span>{" "}
              developer y estudiante de Ingenieria en Desarrollo de Software.
            </p>
            <a
              href={pdf}
              download="JonathanCV.pdf"
              className="btn btn-outline-danger py-2"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
