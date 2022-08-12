import React, { Component } from "react";
import Dishes from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component {
  state = {
    dishes: Dishes,
    selectedDish: null,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
  };



  render() {
    const menu = this.state.dishes.map((item) => (
      <MenuItem
        dish={item}
        key={item.id}
         DishSelect = {()=>this.onDishSelect(item)}
      />
    ));
      let dishDetail = null;
    if(this.state.selectedDish !=null){
      dishDetail = <DishDetail selectedDish = {this.state.selectedDish}/>
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">{menu} </div>
          <div className="col-8">{dishDetail} </div>
        </div>
      </div>
    );
  }
}

export default Menu;
