import * as actionTypes from "./actionTypes";
import { baseUrl } from "./baseUrl";
import axios from "axios";

export const addComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toDateString();
  axios
    .post(baseUrl + "comments", newComment)
    .then((res) => res.data)
    .then((data) => dispatch(commentConcat(data)));
};

export const commentConcat = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

export const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

export const commentLoading = () => ({
  type: actionTypes.COMMENTS_LOADING,
});
export const loadComments = (comments) => ({
  type: actionTypes.LOAD_COMMENTS,
  payload: comments,
});

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());

    axios
      .get(baseUrl + "dishes")
      .then((response) => response.data)
      .then((data) => dispatch(loadDishes(data)));
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(commentLoading);

    axios
      .get(baseUrl + "comments")
      .then((response) => response.data)
      .then((data) => dispatch(loadComments(data)));
  };
};
