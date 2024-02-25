import React, { useState } from "react";
import "../styles/Editorial.scss";
import { Grid } from "@mui/material";

export const Modal: React.FC<{
  src: string;
  alt: string | undefined;
  onClose: any;
}> = ({ src, alt, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
    </div>
  );
};

const Editorial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");

  const showModal = (str: string) => {
    setSrc(str);
    setIsOpen(true);
  };

  return (
    <div className="editorial">
      <div className="top">
        <Grid container spacing={7}>
          <Grid item xs={7.5}>
            <div className="content">
              <div className="content-title">WHITE DEMON</div>
              <p className="content-desc">
                The basic collection about the stylization and the creation of
                apparent silhouette. In addition, the collection is built with a
                meant of reminding people about the &quot;Simple Forget&quot;,
                not only in life but also in fashion nowadays. An extremely
                rushed life and ridiculously high demand for putting so many
                details on clothes, together, they leave the simplicity in
                fashion alone. Thus, by using the white spirit as the main
                objective for this collection, we can see that the symbol of
                simplicity is being surrendered in this current fashion world.
              </p>
            </div>
            <div className="img">
              <img
                src="/assets/images/project/editorial/2.jpeg"
                alt=""
                onClick={() =>
                  showModal("/assets/images/project/editorial/2.jpeg")
                }
              />
              <img
                src="/assets/images/project/editorial/6.jpeg"
                alt=""
                onClick={() =>
                  showModal("/assets/images/project/editorial/6.jpeg")
                }
              />
            </div>
            <img
              className="img-footer"
              src="/assets/images/project/editorial/4.jpeg"
              alt=""
              onClick={() =>
                showModal("/assets/images/project/editorial/4.jpeg")
              }
            />
          </Grid>
          <Grid item xs={4.5}>
            <img
              src="/assets/images/project/editorial/1.jpeg"
              alt=""
              onClick={() =>
                showModal("/assets/images/project/editorial/1.jpeg")
              }
            />
            <img
              style={{ paddingTop: "56px" }}
              src="/assets/images/project/editorial/8.jpeg"
              alt=""
              onClick={() =>
                showModal("/assets/images/project/editorial/8.jpeg")
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={7} sx={{ paddingTop: "55px" }}>
          <Grid item xs={4.7}>
            <img
              src="/assets/images/project/editorial/3.jpeg"
              alt=""
              onClick={() =>
                showModal("/assets/images/project/editorial/3.jpeg")
              }
            />
          </Grid>
          <Grid item xs={7.3}>
            <img
              src="/assets/images/project/editorial/7.jpeg"
              alt=""
              onClick={() =>
                showModal("/assets/images/project/editorial/7.jpeg")
              }
            />
            <div className="end-content">
              <p>
                Creative & Design: Gia Uyen Luu
                <br />
                Photo & Retouch: Nhi Ngo
                <br />
                Make up: Nguyen Thanh Nguyen
                <br />
                Support: Thanh Phuong
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      {isOpen && (
        <Modal src={src} alt="snow" onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Editorial;
