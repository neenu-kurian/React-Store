import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import useStyles from "./SubmitReview.styles";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SubmitReview = () => {
  const { productId } = useParams();

  const [rating, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");
  const classes = useStyles();

  const submitReview = async (event) => {
    event.preventDefault();
    const datatoPost = {
      productId: productId,
      locale: "nl-NL",
      rating: rating,
      text: review,
    };

    await axios.post(`/productreview/reviews/${productId}`, { ...datatoPost }).catch((err) => {
      console.log("error", err);
    });
  };

  return (
    <form onSubmit={submitReview}>
      <Typography sx={{ mt: 3 }}>Write a Review</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        sx={{ mt: 2 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Box component="span" sx={{ display: "block", mt: 1 }}>
        <TextField
          id="review"
          type="text"
          value={review}
          className={classes.textfield}
          multiline
          minRows={3}
          placeholder={"type review here..."}
          onChange={(e) => setReview(e.target.value)}
        />

        <Button variant="outlined" size="medium" type="submit" sx={{ display: "block", mt: 3 }}>
          Submit Review
        </Button>
      </Box>
    </form>
  );
};

export default SubmitReview;