import { styled } from "@mui/material/styles";
import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import Link from "./Link";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 260,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.2,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const images = [
  {
    url: "/assets/images/project/marketing.png",
    title: "Marketing",
    href: "/project/marketing",
  },
  {
    url: "/assets/images/project/creative.JPG",
    title: "Creative",
    href: "/project/creative",
  },
  {
    url: "/assets/images/project/virtual.jpg",
    title: "Virtual",
    href: "/project/virtual",
  },
];

const Project = () => {
  return (
    <section style={{ paddingTop: "3rem" }} id="project">
      <div
        className="project"
        style={{
          backgroundImage: "url(/assets/images/project/cover-page.jpg)",
        }}
      >
        <div className="project-content">
          <div className="project-content__title">Hello</div>
          <div className="project-content__des">
            This is my passion and experience I acurred until now. Beside ,
            there are some files that I do not keep and some are not perfectly
            completed. How ever, here is the merchandises that I feel the most
            satisfied.
          </div>
        </div>
        <div className="menu-project">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              minWidth: 300,
              width: "100%",
              gap: "35px",
            }}
          >
            {images.map((image) => (
              <Link key={image.title} href={image.href}>
                <ImageButton
                  focusRipple
                  style={{
                    width: 160,
                  }}
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Link>
            ))}
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Project;
