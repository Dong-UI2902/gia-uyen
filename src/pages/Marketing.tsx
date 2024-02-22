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

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing-title">Marketing</div>
      <Grid container spacing={2} marginTop={4} marginBottom={4}>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/images/project/marketing/1.png"
                alt="green iguana"
              />
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "0 auto",
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1j7tXapYvJgpLqIUsTY2FuFj20lOd8LXi/view?usp=drive_link"
                >
                  See More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/images/project/marketing/2.png"
                alt="green iguana"
              />
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "0 auto",
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1aJl_cFoRamo4yc5tyoxpNoiCT3OcdF00/view?usp=drive_link"
                >
                  See More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/images/project/marketing/3.png"
                alt="green iguana"
              />
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "0 auto",
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1B-DP1IfgCeAY1LFBeJskfzQpXSx1zx3q/view?usp=drive_link"
                >
                  See More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/images/project/marketing/4.png"
                alt="green iguana"
              />
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "0 auto",
                  }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1cQuFIXCdRRVXu69gEyATxRkGloeOZ6GE/view?usp=drive_link"
                >
                  See More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Marketing;
