import React from "react";
import ReactDOM from "react-dom";
import SubmitReview from "./SubmitReview";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SubmitReview></SubmitReview>, div);
});