import React from "react";
import dateFormate, { masks } from "dateformate";
import Loading from "./Loading";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id} className="mb-3">
        <h4>{comment.author}</h4>
        <p>Rating: {comment.rating}</p>
        <p>Comment: {comment.comment}</p>
        <p>Date: {comment.date}</p>
        <hr />
      </div>
    );
  });
};

export default LoadComments;
