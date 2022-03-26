import React from "react";
import "../App.css";
//import about from "../assets/img/about.PNG";
//import profil from "../assets/img/perfil.png";
function About() {
  return (
    <section class="about section " id="about">
      <h2 class="section-title">About</h2>

      <div class="about__container bd-grid">
        <div class="about__img">{/* <img src={about} alt="" /> */}</div>

        <div>
          <h2 class="about__subtitle">I'am Najiba Chaoua</h2>
          <p class="about__text">
            I am a software engineering from the Institut Supérieur des Sciences
            Applied and Technologies of Sousse.I spent my end of studies
            internship within the company vneuron. I am interested in web
            development .I am open to learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
