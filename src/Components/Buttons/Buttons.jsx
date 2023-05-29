import { Link } from "react-router-dom";
import "./Buttons.css";

function Buttons() {
  /* Function to change the active color of the button */
  // useEffect(() => {
  //   [...document.querySelectorAll(".control")].forEach((button) => {
  //     button.addEventListener("click", function () {
  //       document.querySelector(".active-btn").classList.remove("active-btn");
  //       this.classList.add("active-btn");
  //     });
  //   });
  // }, []);

  return(
    <section className="fs-4 position-fixed top-50 d-flex flex-column align-items-center justify-content-center controlls">
      <Link to="/">
        <button type="button" className="p-3 control control-1 btn-custom">
          <i className="bi bi-house"></i>
        </button>
      </Link>

      <Link to="/about">
        <button type="button" className="p-3 control control-2 btn-custom">
          <i className="bi bi-person"></i>
        </button>
      </Link>

      <Link to="/work">
        <button type="button" className="p-3 control control-3 btn-custom">
          <i className="bi bi-briefcase"></i>
        </button>
      </Link>

      <Link to="/contact">
        <button type="button" className="p-3 control control-4 btn-custom">
          <i className="bi bi-envelope-heart"></i>
        </button>
      </Link>
    </section>
  );
}

export default Buttons;
