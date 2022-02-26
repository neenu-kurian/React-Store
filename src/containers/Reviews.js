import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getReviews } from "../redux/actions/products";

import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import useStyles from "./Reviews.styles";

const Review = () => {
  const allReviews = useSelector((state) => state.allReviews.reviews);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [rating, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(`/productreview/reviews/${productId}`).catch((err) => console.log("error", err));
      dispatch(getReviews(response.data));
    };
    fetchReviews();
  }, []);

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

  const renderReviews = () => {
    return (
      <React.Fragment>
        {!allReviews ? (
          <div>reviews are loading</div>
        ) : (
          allReviews.map((eachreview, index) => {
            return (
              <div key={index}>
                <Rating name="read-only" value={eachreview.rating} readOnly />
                <Typography sx={{mb:4}}>{eachreview.text}</Typography>
              </div>
            );
          })
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Accordion sx={{ mt: 4 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{px:0}}>
          <Typography>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{px:0}}>{renderReviews()}</AccordionDetails>
      </Accordion>

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

          <Button sx={{ mt: 3 }} variant="outlined" size="medium" type="submit" className={classes.submitbtn}>
            Submit Review
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Review;
