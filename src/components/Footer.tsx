import React from "react";
import { Button, Grid } from "@mui/material";
import { isMobile } from "../helper/helper";

const Footer = () => {
  return (
    <section className="contact" id="contact">
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <div className="contact-content">
            <div className="contact-title">GIA UYEN LUU</div>

            <div className="contact-content__title">GENERAL INQUIRIES</div>
            <div>
              <a
                href="mailto:Gia.cre14@gmail.com"
                rel="noreferrer"
                className="contact-content__info contact-link"
                target="_top"
              >
                Gia.cre14@gmail.com
              </a>
            </div>
            <div>
              <a
                href="tel:+33 6 49 47 84 79"
                className="contact-content__info contact-link"
              >
                +33 6 49 47 84 79{" "}
              </a>
            </div>
            <div className="contact-content__info">Paris | France </div>
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="contact-content">
            {!isMobile() && (
              <div className="contact-title" style={{ opacity: 0 }}>
                GIA UYEN LUU
              </div>
            )}

            <div className="contact-content__title">FOLLOW ME</div>
            <div>
              <a
                href="https://www.instagram.com/gia.ism"
                target="_blank"
                className="contact-content__info contact-link"
                rel="noreferrer"
              >
                ig@gia.ism
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/lguyen"
                className="contact-content__info contact-link"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/lguyen
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/assets/images/contact.jpg" alt="" />
        </Grid>
      </Grid>
      <div className="click">Click Click!</div>
      <div className="contact-button">
        <svg
          style={{
            stroke: "rgb(190, 190, 190)",
            fill: "rgb(190, 190, 190)",
            overflow: "visible",
            width: "50px",
            height: "8px",
            marginRight: "10px",
            marginLeft: "40px",
          }}
        >
          <g>
            <g style={{ touchAction: "pan-x pan-y pinch-zoom" }}>
              <path
                d="M1.4210854715202004e-14,2L46.81515202061233,2"
                strokeLinecap="butt"
                strokeWidth="32"
                fill="none"
                pointerEvents="auto"
                opacity="0"
              ></path>
              <path
                d="M1.4210854715202004e-14,2L46.81515202061233,2"
                strokeLinecap="butt"
                strokeWidth="4"
                fill="none"
                pointerEvents="auto"
              ></path>
            </g>
            <path
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              d="M38.81515202061233,-4L46.81515202061233,2L38.81515202061233,8"
            ></path>
          </g>
        </svg>
        <Button
          href="https://drive.google.com/file/d/1vp8tDvVbAEBO-wH0QMSnfYbMK4CWywHs/view?usp=drive_link"
          variant="contained"
          target="_blank"
        >
          Resume
        </Button>
      </div>
    </section>
  );
};

export default Footer;
