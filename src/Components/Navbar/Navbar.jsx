import React from "react";

function Navbar() {
  return (
    <div className="row g-0 m-0 text-white">
      <div className="col-12 col-lg-6 g-0">
        <div className="d-flex justify-content-center justify-content-lg-start">
          <p className="">Portafolio</p>
        </div>
      </div>

      <div className="col-12 col-lg-6 g-0">
        <div className="d-flex justify-content-center justify-content-lg-end gap-3">
          <a
            href="https://github.com/JonathanEKP"
            target="_blank"
            className="text-decoration-none"
          >
            <i className="bi bi-github text-white"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-larios-448b81244/"
            target="_blank"
            className="text-decoration-none"
          >
            <i className="bi bi-linkedin text-white"></i>
          </a>
          <a
            href="https://www.instagram.com/jonathannn_l/"
            target="_blank"
            className="text-decoration-none"
          >
            <i className="bi bi-instagram text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
