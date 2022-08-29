import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const DishDetail = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          className="p-3 rounded"
          src={baseUrl + props.selectedDish.image}
        />
        <CardBody>
          <CardTitle className="fs-4">{props.selectedDish.name}</CardTitle>
          <CardText>{props.selectedDish.description}</CardText>
          <CardText className="fs-5">Tk: {props.selectedDish.price}</CardText>
        </CardBody>
      </Card>
      <hr />
      <div className="mt-2">
        <LoadComments
          comments={props.comments}
          commentsIsLoading={props.commentsIsLoading}
        />
      </div>
      <hr />
      <CommentForm
        dishId={props.selectedDish.id}
        addComment={props.addComment}
      />
    </div>
  );
};

export default DishDetail;
