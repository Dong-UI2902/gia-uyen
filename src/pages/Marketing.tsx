import React from "react";
import "../styles/Marketing.scss";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Grid,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "../components/Link";
import SendIcon from "@mui/icons-material/Send";
import { isMobile } from "../helper/helper";

const Item = [
  {
    name: "SOCIAL MEDIA MARKETING",
    tag: "STEVEN PASSARO",
    img: "/assets/images/project/marketing/6.png",
    url: "https://drive.google.com/file/d/1JprA6JehpI3DpJDqy4UX8I8lSBPZRlqa/view?usp=drive_link",
  },
  {
    name: "INTERNATIONAL BUSINESS",
    tag: "LOUIS VUITTON | FRAGRANCE",
    img: "/assets/images/project/marketing/5.png",
    url: "https://drive.google.com/file/d/1M-md_cLbTntbV7GWtonvVyliWR_R7psh/view?usp=drive_link",
  },
  {
    name: "VISUAL MERCHANDISE",
    tag: "KITH | RTW",
    img: "/assets/images/project/marketing/1.png",
    url: "https://drive.google.com/file/d/1j7tXapYvJgpLqIUsTY2FuFj20lOd8LXi/view?usp=drive_link",
  },
  {
    name: "MARKETING STRATEGY",
    tag: "SKIMS | WELLNESS SPA",
    img: "/assets/images/project/marketing/2.png",
    url: "https://drive.google.com/file/d/1aJl_cFoRamo4yc5tyoxpNoiCT3OcdF00/view?usp=drive_link",
  },
  {
    name: "PRINCIPLE OF MARKETING",
    tag: "ACW* | RTW",
    img: "/assets/images/project/marketing/3.png",
    url: "https://drive.google.com/file/d/1B-DP1IfgCeAY1LFBeJskfzQpXSx1zx3q/view?usp=drive_link",
  },
  {
    name: "LEATHER & ACCESSORIES",
    tag: " LOEWE | CASA",
    img: "/assets/images/project/marketing/4.png",
    url: "https://drive.google.com/file/d/1cQuFIXCdRRVXu69gEyATxRkGloeOZ6GE/view?usp=drive_link",
  },
];

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing-title">Marketing</div>
      <Grid
        container
        spacing={2}
        marginTop={4}
        marginBottom={4}
        paddingLeft={2}
        paddingRight={2}
      >
        {Item.map((item, index) => (
          <Grid item md={3} xs={6} key={index}>
            <Link href={item.url} target="_blank">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100%"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                      <br />
                      {item.tag}
                    </Typography>
                  </CardContent>
                  {!isMobile() && (
                    <CardActions>
                      <Button
                        className="btn"
                        variant="contained"
                        sx={{
                          margin: "0 auto",
                        }}
                        target="_blank"
                        href={item.url}
                      >
                        See More
                      </Button>
                    </CardActions>
                  )}
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Marketing;
