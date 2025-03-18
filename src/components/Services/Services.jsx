import React, { useEffect } from "react";
import "./services.css";

import { RiMacbookLine } from "react-icons/ri";
import { RiLayout4Line } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";

import ScrollReveal from "scrollreveal";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


const Services = () => {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation("services");
  const servicesData = [
    {
      id: 1,
      title: t("servicesList.0.service__title"),
      description: t("servicesList.0.service__description"),
        outils: t("servicesList.0.service__outils"),
      icon: <RiMacbookLine />,
    },
    {
      id: 2,
      title: t("servicesList.1.service__title"),
      description:t("servicesList.1.service__description"),
        outils: t("servicesList.1.service__outils"),
      icon: <RiLayout4Line />,
    },
    {
      id: 3,
      title: t("servicesList.2.service__title"),
      description: t("servicesList.2.service__description"),
        outils: t("servicesList.2.service__outils"),
      icon: <RiCalendar2Line />
    },
    {
      id: 4,
      title: t("servicesList.3.service__title"),
      description: t("servicesList.3.service__description"),
        outils: t("servicesList.3.service__outils"),
      icon: <MdOutlineDesignServices />
    },
  ];
  useEffect(() => {
    const sr = ScrollReveal({});
    sr.reveal(".services__card", {interval: 100});
  }, []);
  return (
    <section className="services__section" id="services">
        <h2 className="section__title">
          <span>Services.</span>
        </h2>
      <div className="container services__container grid">
        {servicesData.map((service) => {
          return (
            <article className="services__card" key={service.id}>
              <div className="services__border"></div>
              <div className="services__content">
                <div className={`services__icon ${theme}`}>
                  <div className="services__box"></div>
                  {service.icon}
                </div>
                <h2 className="services__title">{t(service.title)}</h2>
                <p className="services__description">{service.description}</p>
                <p><span>📌 Outils</span> : {service.outils}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
