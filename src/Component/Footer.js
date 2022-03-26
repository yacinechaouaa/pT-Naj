import React from "react";
import "../App.css";
//import about from "../assets/img/about.jpg";
//import profil from "../assets/img/perfil.png";
function Footer() {
  return (
    <footer class="footer">
      <p class="footer__title">Najiba Chaoua</p>
      <div class="footer__social">
        <a
          href="https://www.facebook.com/najiba.ch.148?ref=bookmarks"
          class="footer__icon"
        >
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="" className="home__social-icon" class="footer__icon">
          <i className="bx bxl-github"></i>
        </a>
        <a href="" className="home__social-icon" class="footer__icon">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
      <p>&#169; 2020 copyright all right reserved</p>
    </footer>
  );
}
export default Footer;
