import React, { useEffect, useState } from "react";
import "./header.css";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineMoon } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";

import { RiCloseLargeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useTranslation } from "react-i18next";

import flagFr from '../../assets/images/header__images/france__flag.png';
import flagUk from '../../assets/images/header__images/uk__flag.png';

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => setOpenMenu(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { i18n } = useTranslation();
  const { t } = useTranslation("header");

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang); // Sauvegarde la langue
  };

  return (
    <header className={`${scrolled ? "window-scrolled" : ""} ${theme}`}>
      <nav className="container nav__container">
        <a href="#" className="nav__logo">
          {/* <span className="nav__logo-circle">AE.</span> */}
          <span className='nav__logo-name'>Abderrahmane EDDOURABI.</span>
        </a>
        <div className={`nav__menu ${openMenu ? "active" : ""}`} id="nav-menu">
          <span className="nav__title">Menu</span>

          <h3 className="nav__name">Abderrahmane Eddourabi</h3>

          <ul className="nav__list">
            <li className="nav__item" onClick={closeMenu}>
              <a
                href="#home"
                className={`nav__link ${
                  activeLink === "home" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("home")}
              >
                {
                  t("nav_home")
                }
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a
                href="#about"
                className={`nav__link ${
                  activeLink === "about" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("about")}
              >
                {
                  t("nav_about")
                }
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a
                href="#services"
                className={`nav__link ${
                  activeLink === "services" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("services")}
              >
                Services
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a
                href="#projects"
                className={`nav__link ${
                  activeLink === "projects" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("projects")}
                >
                {
                  t(
                    "nav_projects"
                  )
                }
              </a>
            </li>
            <li className="nav__item" onClick={closeMenu}>
              <a
                href="#contact"
                className={`nav__link ${
                  activeLink === "contact" ? "active-link" : ""
                } nav__link-button`}
                onClick={() => setActiveLink("contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            {openMenu && <RiCloseLargeLine onClick={handleToggleMenu} />}
          </div>
        </div>
        <div className="nav__buttons">
          <div className="nav__change-theme" onClick={() => dispatch(toggleTheme())}>
            {
              theme === "light" ?
              <AiOutlineMoon className="change-theme" id="theme-button" />
              :
              <MdOutlineLightMode/>
            }
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleToggleMenu}
          >
            {!openMenu && <RiMenu4Line />}
          </div>
        <div
          className="nav__change-langue"
          id="nav-change-langue"
          onClick={handleChangeLanguage}
        >
          {
            i18n.language === "fr" ?
            <img src={flagUk} alt="uk__flag" />
            :
            <img src={flagFr} alt="fr__flag"/>
          }
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
