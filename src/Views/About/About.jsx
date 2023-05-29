import React from "react";
import SkillsText from "../../Components/SkillsText/SkillsText";
import { DiReact } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";

function About() {
  return (
    <section className="sec2 seccion about " id="about">
      <div className="row g-0 m-0">
        <div className="col-12 mt-4">
          <h2 className="h2 display-6 text-center text-danger">Sobre mí</h2>
        </div>

        <div className="col-12 px-3 text-center text-white">
          <p>
            Tengo 21 años de edad. Actualmente me encuentro estudiando la carrea
            de Ingenieria en Desarrollo de Software en ITCA-FEPADE, estoy en mi
            tercer año de carrera y también soy estudiante del BootCamp FrontEnd
            Developer que imparte la empresa KODIGO.
          </p>
          <p>
            Soy de nacionalidad Salvadoreña y me gusta mucho todo lo que tenga
            que ver con Tech. Soy bastante autodidacta, me gusta mucho aprender
            cosas por mi cuenta y seguir ampliando mi conocimiento.
          </p>
          <p>
            Me gustaría seguir aprendiendo sobre el desarrollo web pero no solo
            del lado del FrontEnd, también tengo mucho interes en aprender sobre
            el Backend y poder convertirme en un programador FullStack.
          </p>
        </div>
      </div>

      <div className="row g-0 m-0">
        <div className="col-12  mt-4">
          <h2 className="h2 display-6 text-center text-danger">
            Skills / Habilidades
          </h2>
          <p className="text-center text-white">
            Estas son algunas de mis habilidades técnicas
          </p>
        </div>

        <SkillsText>
          {/* <i className="bi bi-filetype-html text-danger"></i> */}
          <SiHtml5 className="text-danger mx-1" />
          <span className="text-light ">HTML</span>
          <p className="text-secondary lead">Intermedio</p>
        </SkillsText>
        <SkillsText>
          {/* <i className="bi bi-filetype-css text-danger"></i> */}
          <SiCss3 className="text-danger mx-1" />
          <span className="text-light ">CSS</span>
          <p className="text-secondary lead ">Intermedio</p>
        </SkillsText>
        <SkillsText>
          {/* <i className="bi bi-filetype-js text-danger"></i> */}
          <TbBrandJavascript className="text-danger mx-1" />
          <span className="text-light ">JS</span>
          <p className="text-secondary lead ">Intermedio</p>
        </SkillsText>
        <SkillsText>
          {/* <i className="bi bi-filetype-sql text-danger"></i> */}
          <SiMicrosoftsqlserver className="text-danger mx-1" />
          <span className="text-light ">SQL Server</span>
          <p className="text-secondary lead ">Avanzado</p>
        </SkillsText>
        <SkillsText>
          <i className="bi bi-translate text-danger mx-1"></i>
          <span className="text-light ">Inglés</span>
          <p className="text-secondary lead ">Intermedio</p>
        </SkillsText>
        <SkillsText>
          <SiCsharp className="text-danger mx-1" />
          <span className="text-light ">C-Sharp</span>
          <p className="text-secondary lead ">Básico</p>
        </SkillsText>
        <SkillsText>
          {/* <i className="bi bi-filetype-jsx text-danger"></i> */}
          <DiReact className="text-danger" />
          <span className="text-light ">React</span>
          <p className="text-secondary lead ">Intermedio</p>
        </SkillsText>
        <SkillsText></SkillsText>
      </div>

      <section className="container pb-5">
        <div className="row g-0 m-0">
          <div className="col-12 mt-4">
            <h2 className="h2 display-6 text-center text-danger">Educación</h2>
          </div>

          <div className="col-12 mt-4">
            <h6 className="fs-4 text-white fw-bold">
              Ingenieria en Desarrollo de Software
            </h6>
            <p className="text-secondary">ITCA-FEPADE, 2020-Act.</p>
          </div>

          <div className="col-12 mt-4">
            <h6 className="fs-4 text-white fw-bold">
              BootCamp FrontEnd Developer
            </h6>
            <p className="text-secondary">KODIGO, 2022-2023.</p>
          </div>

          <div className="col-12 mt-4">
            <h6 className="fs-4 text-white fw-bold">
              Bachillerato General, Opcion Computación
            </h6>
            <p className="text-secondary">ITEXSAL, 2018-2019</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
