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

  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [error, setError] = React.useState(false);
  const classes = useStyles();

  const submitReview = async (event) => {
    event.preventDefault();
    const datatoPost = {
      productId: productId,
      locale: "nl-NL",
      rating: rating,
      text: review,
    };

    await axios.post(`/productreview/reviews/${productId}`, { ...datatoPost }).catch(() => {
      setError(true);
    });
  };

  const changeReview = (event) => {
    setReview(event.target.value);
  }

  const changeRating = (event) => {
      setRating(event.target.value);
  }

  return (
    <form onSubmit={submitReview}>
      <Typography sx={{ mt: 3 }}>Write a Review</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        sx={{ mt: 2 }}
        onChange={changeRating}
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
          onChange={changeReview}
        />

        <Button variant="outlined" size="medium" type="submit" sx={{ display: "block", mt: 3 }}>
          Submit Review
        </Button>
        {error && <Typography variant="subtitle1">Could submit review, please try again</Typography>}
      </Box>
    </form>
  );
};

export default SubmitReview;
