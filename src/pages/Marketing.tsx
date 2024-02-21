import React from "react";
import "../styles/Marketing.scss";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import Link from "../components/Link";

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing-title">Marketing</div>
      <div className="marketing-project">
        <div className="marketing-project__title">1. A COLD WALL</div>
        <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
          <CardActionArea
            LinkComponent={Link}
            href="https://drive.google.com/file/d/1B-DP1IfgCeAY1LFBeJskfzQpXSx1zx3q/view?usp=sharing"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="/assets/images/project/marketing/Principle of MKT -01.png"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button
              href="https://drive.google.com/file/d/1B-DP1IfgCeAY1LFBeJskfzQpXSx1zx3q/view?usp=sharing"
              size="small"
              color="primary"
              target="_blank"
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="marketing-project">
        <div className="marketing-project__title">2. KITH</div>
        <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
          <CardActionArea
            LinkComponent={Link}
            href="https://drive.google.com/file/d/1j7tXapYvJgpLqIUsTY2FuFj20lOd8LXi/view?usp=drive_link"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="/assets/images/project/marketing/KHRISTMAS CAMPAIGN-01.png"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button
              href="https://drive.google.com/file/d/1j7tXapYvJgpLqIUsTY2FuFj20lOd8LXi/view?usp=drive_link"
              size="small"
              color="primary"
              target="_blank"
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="marketing-project">
        <div className="marketing-project__title">3. SKIMS</div>
        <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
          <CardActionArea
            LinkComponent={Link}
            href="https://drive.google.com/file/d/1tRccwW18qSAnIjzMRvlMvkUe9N0UzLs8/view?usp=drive_link"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="/assets/images/project/marketing/1.png"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button
              href="https://drive.google.com/file/d/1tRccwW18qSAnIjzMRvlMvkUe9N0UzLs8/view?usp=drive_link"
              size="small"
              color="primary"
              target="_blank"
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;
