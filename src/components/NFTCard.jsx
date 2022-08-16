import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function NFTCard({ item }) {
  return (
    <Card sx={{ width: 400, height: 674, backgroundColor: "#0E1E45" }}>
      <CardActionArea>
        <CardMedia component="img" />
        <img className="nft-image" src={item.nft.image} alt="no image" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.nft.name}
          </Typography>

          <Stack direction="row" spacing={1}>
            <img className="user-image" src={item.user.image} alt="no image" />
            <Typography>{item.user.name}</Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            <Stack className="nft-bid" direction="row" spacing={15}>
              <Box>Current Bid :</Box>
              <Box>End in :</Box>
            </Stack>
            <Stack direction="row" spacing={11}>
              <Typography gutterBottom variant="h6" component="div">
                {item.bid.amount}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.bid.ends}
              </Typography>
            </Stack>
            <Button component={Link} to="/404" className="nft-btn">
              Place a bid
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
