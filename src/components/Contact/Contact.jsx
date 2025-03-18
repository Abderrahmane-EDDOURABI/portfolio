import React, { useEffect, useState } from "react";
import "./contact.css";

import { RiSendPlaneLine } from "react-icons/ri";
import { LiaFacebook } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

import arrowDownContact from '../../assets/images/contact__arrow.svg';

import ScrollReveal from "scrollreveal";

import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject : "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4626gdb", // Remplace par ton SERVICE ID
        "template_p9rqdt7", // Remplace par ton TEMPLATE ID
        {
          from_name: formData.name,
          name: "Abderrahmane EDDOURABI",
          from_email: formData.email, // L'email du client
          email: "abderrahmane.eddourabi@gmail.com", // L'email du client
          subject: formData.subject, // Subject
          message: formData.message,
          reply_to: formData.email, // Permet d'afficher l'email du client dans "Répondre à"
        },
        "pzw3mKSsTtYraxDoy" // Remplace par ton PUBLIC KEY
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès ✅", response);
          setOpenDialog(true); // Affiche le popup de succès
          setFormData({ name: "", email: "", subject: "", message: "" }); // Réinitialise le formulaire
        },
        (error) => {
          console.log("Échec de l'envoi ❌", error);
          alert("Erreur lors de l'envoi du message.");
        }
      )
      .finally(() => setLoading(false)); // Désactive le loader après la requête
  };

  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".contact__social, .contact__data", { origin: "left" });
    sr.reveal(".contact__mail", { origin: "right" });
  }, []);

  const { t } = useTranslation("contact");
  return (
    <section className="contact__section" id="contact">
      <div className="container contact__container grid">
        <div className="contact__data">
          <h2 className="section__title">
            <span>{t("contact__title")}</span>
          </h2>
          <p className="contact__description-1">
            {t("contact__description_one")}
          </p>
          <p className="contact__description-2">
            {t("contact__description_two")}
          </p>
          <div className="geometric-box"></div>
        </div>
        <div className={`contact__mail ${theme}`}>
          <h2 className="contact__title">{t("contact__mail_title")}</h2>
          <form action="" className="contact__form" id="contact-form" onSubmit={handleSubmit}>
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  placeholder={t("contact__mail_label_name")}
                  id="name"
                  name="name"
                  className={`contact__input`}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="contact__label">
                  {t("contact__mail_label_name")}
                </label>
              </div>
              <div className="contact__box">
                <input
                  type="email"
                  placeholder={t("contact__mail_label_email")}
                  id="email"
                  name="email"
                  className={`contact__input`}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="contact__label">
                  {t("contact__mail_label_email")}
                </label>
              </div>
            </div>
              <div className="contact__box">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={`contact__input`}
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact__mail_input_subject")}
                />
                <label htmlFor="subject" className="contact__label">
                  {t("contact__mail_input_subject")}
                </label>
              </div>
              <div className="contact__box contact__area">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                  className={`contact__input`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
              </div>
            <button type="submit" className="contact__button" disabled={loading}>
              <RiSendPlaneLine />
              {
                  loading ? 
                  <CircularProgress size={24} color="inherit" />
                  :
                  t("contact__mail_input_button")
              }
            </button>
          </form>
          {/* Popup de succès */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>🎉 Message envoyé !</DialogTitle>
        <DialogContent>Votre message a été envoyé avec succès. Nous vous répondrons bientôt.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        <div className="contact__social">
          <img src={arrowDownContact} alt="arrow__down" className={`contact__social-arrow ${theme}`}/>
           <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">
                {t("contact__social__description_one")}
              </p>
              <p className="contact__social-description-2">
                {t("contact__social__description_two")}
              </p>
            </div>
            <div className="contact__social-links">
              <a
                href="https://www.instagram.com/abderrahmane__eddourabi/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <LiaInstagram />
              </a>
              <a
                href="https://www.facebook.com/abderrahmane.eddourabi.568/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <LiaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/abderrahmane-eddourabi/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <LiaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
