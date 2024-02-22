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
      <Grid container spacing={2} marginTop={4}>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/images/project/marketing/1.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  KHRISTMAS CAMPAIGN
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  endIcon={<SendIcon />}
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
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  SKIMS
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  endIcon={<SendIcon />}
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
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  A COLD WALL
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  endIcon={<SendIcon />}
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
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  LOEWE
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="btn"
                  variant="contained"
                  endIcon={<SendIcon />}
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
