import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div className="card-wrapper">
      <Card className="card-item" onClick={props.DishSelect}>
        <CardBody>
          <CardImg
            className="card-img"
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle className="dish-name">{props.dish.name} </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
