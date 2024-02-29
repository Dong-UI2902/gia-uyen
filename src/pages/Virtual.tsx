import React from "react";
import "../styles/Virtual.scss";
import { Box, Grid } from "@mui/material";

const Virtual = () => {
  return (
    <div className="virtual">
      <div className="virtual-title">Virtual</div>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={6}>
          <div className="virtual-video">
            <img src="/assets/images/project/virtual/1.png" alt="" />
            <a
              className="virtual-content"
              href="https://drive.google.com/file/d/1NLPwAqyBxQqVzrV07hcUtTDQPCQa5QIx/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="131"
                height="131"
                viewBox="0 0 131 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="inner-circle"
                  d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                  fill="white"
                ></path>
                <circle
                  className="outer_circle"
                  cx="65.5"
                  cy="65.5"
                  r="64"
                  stroke="white"
                ></circle>
                <path
                  className="play"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60 76V57L77 66.7774L60 76Z"
                  fill="#BF2428"
                ></path>
              </svg>
            </a>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="virtual-video">
            <img src="/assets/images/project/virtual/2.png" alt="" />
            <a
              className="virtual-content"
              href="https://drive.google.com/file/d/1RchB7hngy46jXsSBKAQBEl7BBdxU4HqA/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="131"
                height="131"
                viewBox="0 0 131 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="inner-circle"
                  d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                  fill="white"
                ></path>
                <circle
                  className="outer_circle"
                  cx="65.5"
                  cy="65.5"
                  r="64"
                  stroke="white"
                ></circle>
                <path
                  className="play"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60 76V57L77 66.7774L60 76Z"
                  fill="#BF2428"
                ></path>
              </svg>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Virtual;
