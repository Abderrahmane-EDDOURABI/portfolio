import React, { useEffect } from "react";
import "./home.css";

import homeImage from "../../assets/images/home-image.jpg";
import { FiGithub } from "react-icons/fi";
import { LiaPinterestP } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";

import { RiArrowDownSLine } from "react-icons/ri";

import ScrollReveal from "scrollreveal";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2000,
      delay: 400,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".home__profile", { origin: "right" });
    sr.reveal(".home__name, .home__info", { origin: "left" });
  }, []);

  const { t } = useTranslation("home");

  return (
    <section className={`home__section ${theme}`} id="home">
      <div className="container home__container grid">
        <h1 className="home__name">Abderrahmane EDDOURABI.</h1>
        <div className="home__profile">
          <div className="home__image">
            <img className="home__img" src={homeImage} alt="home__image" />
            <div className="home__shadow"></div>
            <div className="geometric-box"></div>
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/abderrahmane-eddourabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <LiaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/abderrahmane__eddourabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <LiaInstagram />
            </a>
            <a
              href="https://github.com/Abderrahmane-EDDOURABI"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FiGithub />
            </a>
            <a
              href="https://fr.pinterest.com/abderrahmaneeddourabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <LiaPinterestP />
            </a>
          </div>
        </div>
        <div className="home__info">
          <p className={`home__description ${theme}`}>
            <b>Web Developer & UX/UI Designer</b>, {t("home__description")}
          </p>
          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <RiArrowDownSLine />
            </div>
            <span className="home__scroll-text">{t("home__scroll")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
