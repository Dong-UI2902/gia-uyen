import React from "react";
import { Button, Grid } from "@mui/material";

const Footer = () => {
  return (
    <section className="contact" id="contact">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="contact-content">
            <div className="contact-title">GIA UYEN LUU</div>

            <div className="contact-content__title">GENERAL INQUIRIES</div>
            <div className="contact-content__info">Gia.cre14@gmail.com</div>
            <div className="contact-content__info">+33 6 49 47 84 79 </div>
            <div className="contact-content__info">Paris | France </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="contact-content">
            <div className="contact-title" style={{ opacity: 0 }}>
              GIA UYEN LUU
            </div>

            <div className="contact-content__title">FOLLOW ME</div>
            <div className="contact-content__info">ig@gia.ism</div>
            <div className="contact-content__info">linkedin.com/in/lguyen</div>
          </div>
        </Grid>
        <Grid item xs={4}>
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
          href="https://drive.google.com/file/d/1WBJEUPgKlfqcxUDB-McAS28d-NXjFcA8/view?usp=drive_link"
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
