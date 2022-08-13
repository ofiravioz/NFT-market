import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Stack } from "@mui/material";
import { UserImage1, MainImage, Bids, History } from "../common/assets.js";
import UserInfo from "./UserInfo.jsx";

export default function NFTCard() {
  return (
    <Card sx={{ width: 400, height: 674, backgroundColor: "#0E1E45" }}>
      <CardActionArea>
        <CardMedia />
        <img className="nft-image" src={MainImage} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Inner State : Pink
          </Typography>

          <Stack direction="row" spacing={1}>
            <img className="user-image" src={UserImage1} />
            <Typography>Cameron Williamson</Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            <Stack className="nft-bid" direction="row" spacing={15}>
              <Box>Current Bid :</Box>
              <Box>End in :</Box>
            </Stack>
            <Stack direction="row" spacing={11}>
              <Typography gutterBottom variant="h6" component="div">
                0.4435 ETH
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                10h 12m 32s
              </Typography>
            </Stack>
            <Button className="nft-btn">Place a bid</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
