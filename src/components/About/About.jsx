import React, { useEffect } from "react";
import "./about.css";
import aboutImage from "../../assets/images/home-image.jpg";

// ICONS
import { RiSendPlaneLine, RiLinkedinBoxLine } from "react-icons/ri";

import ScrollReveal from "scrollreveal";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const About = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".about__info, .about__container", { origin: "left" });
    sr.reveal(".about__image", { origin: "right" });
  }, []);
  const { t } = useTranslation("about");
  return (
    <section className="about__section" id="about">
      <div className="container about__container grid">
        <h2 className="section__title">
          <span>{t("about__title")}.</span>
        </h2>
        <div className="about__profile">
          <div className="about__image">
            <img className="about__img" src={aboutImage} alt="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <div className="about__box"></div>
          </div>
        </div>
        <div className="about__info">
          <p className={`about__description ${theme}`}>
            {t("about__description")}
          </p>
          <ul className="about__list">
            <li className="about__item">
              <b>{t("about__technical")} : </b> {t("about__technical_list")}
            </li>
            <li className="about__item">
              <b>{t("about__soft")} : </b> {t("about__soft_list")}
            </li>
          </ul>
          <div className="about__buttons">
            <a href="#contact" className="button">
              <RiSendPlaneLine /> {(t("about__contact"))}
            </a>
            <a
              href="https://www.linkedin.com/in/abderrahmane-eddourabi/"
              target="_blank"
              className={`button__ghost ${theme}`}
            >
              <RiLinkedinBoxLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
