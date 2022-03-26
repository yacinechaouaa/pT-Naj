import React from "react";
import "../App.css";
//import about from "../assets/img/about.jpg";
//import profil from "../assets/img/perfil.png";
function Skill() {
  return (
    <section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>

      <div class="skills__container bd-grid">
        <div>
          <h2 class="skills__subtitle">Profesional Skills</h2>
          <p class="skills__text">
            during my university process I acquire the following skills
          </p>
          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-html5 skills__icon"></i>
              <span class="skills__name">Reactjs</span>
            </div>
            <div class="skills__bar skills__html"></div>
            <div>
              <span class="skills__percentage">60%</span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-css3 skills__icon"></i>
              <span class="skills__name">Nodejs </span>
            </div>
            <div class="skills__bar skills__css"></div>
            <div>
              <span>65%</span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-javascript skills__icon"></i>
              <span class="skills__name">JAVASCRIPT</span>
            </div>
            <div class="skills__bar skills__js"></div>
            <div>
              <span class="skills__percentage">65%</span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxs-paint skills__icon"></i>
              <span class="skills__name">UX/UI</span>
            </div>
            <div class="skills__bar skills__ux"></div>
            <div>
              <span class="skills__percentage">85%</span>
            </div>
          </div>
        </div>

        <div>
          <img src="../assets/img/work3.jpg" alt="" class="skills__img" />
        </div>
      </div>
    </section>
  );
}
export default Skill;
