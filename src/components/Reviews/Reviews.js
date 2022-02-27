import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getReviews } from "../../redux/actions/products";
import SubmitReview from "../Form/SubmitReview";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CircularProgress } from "@mui/material";

const Review = () => {
  const allReviews = useSelector((state) => state.allReviews.reviews);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(`/productreview/reviews/${productId}`).catch((err) => setError(true));
      dispatch(getReviews(response.data));
    };
    fetchReviews();
  }, []);

  const renderReviews = () => {
    return (
      <React.Fragment>
        {!allReviews ? (
          <Typography variant="subtitle1">
            <CircularProgress />
          </Typography>
        ) : allReviews.length == 0 ? (
          <Typography variant="subtitle1">No reviews available</Typography>
        ) : (
          allReviews.map((eachreview, index) => {
            return (
              <div key={index}>
                <Rating name="read-only" value={eachreview.rating} readOnly />
                <Typography sx={{ mb: 4 }}>{eachreview.text}</Typography>
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ px: 0 }}>
          <Typography>Reviews</Typography>
        </AccordionSummary>
        {error ? (
          <Typography variant="subtitle1">
            Unable to get reviews, please try again
          </Typography>
        ) : (
          <AccordionDetails sx={{ px: 0 }}>{renderReviews()}</AccordionDetails>
        )}
      </Accordion>

      <SubmitReview />
    </React.Fragment>
  );
};

export default Review;
