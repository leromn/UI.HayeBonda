import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "react-simple-star-rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductTemp(props) {
  var rating = 1;
  let base64ImageString = Buffer.from(props.thumb, "binary").toString("base64");
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="card"
      onClick={() => {
        alert("clicked");
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        component="img"
        src={`data:image/jpeg;base64,${base64ImageString}`}
        title="green iguana"
      />
      {/* {console.log(props.thumb)} */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          name {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price{props.price}
        </Typography>
        {/* <Button style={{ backgroundColor: "green", color: "white" }}>
          Browse
        </Button> */}
        <Rating initialValue={rating} />
        <AddShoppingCartIcon />
      </CardContent>
    </Card>
  );
}
