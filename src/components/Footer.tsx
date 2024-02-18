import React from "react";
import { Button, Container, Grid } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div className="footer">
      <Container sx={{ maxWidth: "1024px!important" }}>
        <div className="contact">
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <img className="contact-image" src="/assets/images/contact.jpg" />
            </Grid>
            <Grid item xs={6} p={8}>
              <div className="contact-content">
                <div className="name">GIA UYEN LUU</div>
                <div>
                  <div className="contact-content__title">PERSONAL CONTACT</div>
                  <div className="info">
                    <div>
                      <PhoneEnabledIcon />
                    </div>
                    <div>(+33) 6 49 47 84 79</div>
                  </div>
                  <div className="info">
                    <div>
                      <EmailIcon />
                    </div>
                    <div>gia.cre14@gmail.com</div>
                  </div>
                </div>
                <div>
                  <div className="contact-content__title">SOCIAL MEDIA</div>
                  <div className="info">
                    <div>
                      <InstagramIcon />
                    </div>
                    <div>ig@gia.ism</div>
                  </div>
                  <div className="info">
                    <div>
                      <LinkedInIcon />
                    </div>
                    <div>linkedin.com/in/lguyen</div>
                  </div>
                </div>

                <div className="contact-content__footer">
                  <div className="footer-country">Paris | France</div>
                  <Button
                    sx={{ textTransform: "none", fontSize: "1.2rem" }}
                    variant="contained"
                    endIcon={<SendIcon />}
                    href="https://drive.google.com/file/d/1thl1DMVWo5WzFu6NscBZVTllR4-mLAmc/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
