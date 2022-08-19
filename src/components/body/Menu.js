import React, { Component } from "react";
import Dishes from "../../data/dishes";
import Comments from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardColumns,
} from "reactstrap";
import COMMENTS from "../../data/comments";

class Menu extends Component {
  state = {
    dishes: Dishes,
    comments: Comments,
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const menu = this.state.dishes.map((item) => (
      <MenuItem
        dish={item}
        key={item.id}
        DishSelect={() => this.onDishSelect(item)}
      />
    ));
    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter(
        (comment) => comment.dishId == this.state.selectedDish.id
      );
      dishDetail = (
        <DishDetail
          selectedDish={this.state.selectedDish}
          comments={comments}
        />
      );
    }
    document.title = "Menu";
    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button color="secondary">Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
