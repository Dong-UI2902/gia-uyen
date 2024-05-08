import { styled } from "@mui/material/styles";
import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import Link from "./Link";
import { isMobile } from "../helper/helper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 260,

  [theme.breakpoints.down("sm")]: {
    width: "90% !important", // Overrides inline-style
    height: 300,
    borderRadius: "10px",
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
  [theme.breakpoints.down("sm")]: {
    alignItems: "end",
  },
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
    title: "Editorial",
    href: "/project/editorial",
  },
  {
    url: "/assets/images/project/virtual.jpg",
    title: "Virtual",
    href: "/project/virtual",
  },
];

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 130,
  },
};

const Project = () => {
  return (
    <section style={{ paddingTop: "3rem" }} id="project">
      <div
        className="project"
        style={{
          backgroundImage: `${
            !isMobile() && "url(/assets/images/project/cover-page.jpg)"
          }`,
        }}
      >
        {!isMobile() ? (
          <>
            <div className="project-content">
              <div className="project-content__title">Hello</div>
              <div className="project-content__des">
                This is my passion and experience I acurred until now. Beside ,
                there are some files that I do not keep and some are not
                perfectly completed. How ever, here is the merchandises that I
                feel the most satisfied.
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
                      <ImageSrc
                        style={{
                          backgroundImage: `url(${image.url})`,
                          borderRadius: "10px",
                        }}
                      />
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
          </>
        ) : (
          <>
            <Typography
              component="div"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                marginLeft: "20px",
                fontWeight: 700,
                fontSize: "13px",
                pb: 2,
              }}
            >
              FEATURE
            </Typography>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              className="slide"
              renderDotsOutside={true}
              centerMode={false}
              partialVisible={true}
            >
              {images.map((image) => (
                <Link key={image.title} href={image.href}>
                  <ImageButton
                    focusRipple
                    style={{
                      width: 160,
                      borderRadius: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    <ImageSrc
                      style={{
                        backgroundImage: `url(${image.url})`,
                        borderRadius: "10px",
                      }}
                    />
                    {/* <ImageBackdrop
                      className="MuiImageBackdrop-root"
                      style={{
                        borderRadius: "10px",
                      }}
                    /> */}
                    {/* <Image>
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
                    </Image> */}
                    <Image>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: "relative",
                          height: "15px",
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                          backgroundColor: "rgb(190, 190, 190)",
                          width: "100%",
                          opacity: 0.49,
                        }}
                      ></Typography>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: "absolute",
                          p: "4rem 0",
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 0px)`,
                          width: "100%",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          textShadow: "1px 1px 2px black",
                        }}
                      >
                        {image.title}
                      </Typography>
                    </Image>
                  </ImageButton>
                </Link>
              ))}
            </Carousel>
          </>
        )}
      </div>
    </section>
  );
};

export default Project;
