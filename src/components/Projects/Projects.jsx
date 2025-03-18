import React, { useEffect } from "react";
import "./projects.css";

import projectOne from "../../assets/images/projects__images/project_one.png";
import projectTwo from "../../assets/images/projects__images/juiceables.png";
import projectThree from '../../assets/images/projects__images/burger__menu.jpg';
import projectFive from '../../assets/images/projects__images/film-noel.jpg';


import { FiArrowUpRight } from "react-icons/fi";

import ScrollReveal from "scrollreveal";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const sr = ScrollReveal({});
    sr.reveal(".projects__card", {interval: 100});
  }, []);
  const { t } = useTranslation("projects");
  const projectsData = [
    {
      id: 1,
      image: projectOne,
      subtitle: t("projectsList.0.subtitle"),
      title: t("projectsList.0.title"),
      description: t("projectsList.0.description"),
      link: "https://abderrahmane-eddourabi-coffee-website.netlify.app/"
    },
    {
      id: 2,
      image: projectTwo,
      subtitle: t("projectsList.1.subtitle"),
      title: t("projectsList.1.title"),
      description: t("projectsList.1.description"),
      link: "https://abderrahmane-eddourabi-landing-page.netlify.app/"
    },
    {
      id: 3,
      image: projectThree,
      subtitle: t("projectsList.2.subtitle"),
      title: t("projectsList.2.title"),
      description: t("projectsList.2.description"),
      link: "https://fr.pinterest.com/abderrahmaneeddourabi/conception-food-menus/"
    },
    {
      id: 4,
      image: projectFive,
      subtitle: t("projectsList.3.subtitle"),
      title: t("projectsList.3.title"),
      description: t("projectsList.3.description"),
      link: "https://fr.pinterest.com/pin/908530924828880425/"
    },
  ];
  return (
    <section className="projects__section" id="projects">
        <h2 className="section__title">
          <span>Projects</span>
        </h2>
      <div className="container projects__container grid">
        {projectsData.map((project) => {
          return (
            <article className={`projects__card ${theme}`} key={project.id}>
              <div className="projects__image">
                <img
                  className="project__img"
                  src={project.image}
                  alt="project__img"
                />
                <a href={project.link} target="_blank" className="projects__button">
                  <FiArrowUpRight />
                </a>
              </div>
              <div className="projects__content">
                <h3 className="projects__subtitle">{project.subtitle}</h3>
                <h4 className="projects__title">{t(project.title)}</h4>
                <p className="projects__description">{project.description}</p>
              </div>
              {/* <div className="projects__buttons">
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <FiGithub />
                  View
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <LiaPinterestP />
                  View
                </a>
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
