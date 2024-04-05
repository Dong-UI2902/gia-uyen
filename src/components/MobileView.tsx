import { Button } from "@mui/material";
import React from "react";

const MobileView = () => {
  return (
    <div className="mobile">
      <div className="mobile-view">
        <div>
          <h1>Better using by computer</h1>
          <div>
            <p>Paris | France</p>
            <p>+33 6 49 47 84 79</p>
            <p>Gia.cre14@gmail.com</p>
            <p>linkedin.com/in/lguyen</p>
          </div>
          <div className="contact-button">
            <Button
              href="https://drive.google.com/file/d/12_debXNoUoO1a5wurfTbVliLMTJgMETp/view?usp=drive_link"
              target="_blank"
              variant="contained"
            >
              resume
            </Button>
          </div>
        </div>
        <div className="mobile-footer">
          <p>www.gia-cre.info</p>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
