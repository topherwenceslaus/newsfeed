import newsStore from "../Store/newsStore";

export const fetch_news = () => {
  return {
    type: "FETCH_NEWS"
  };
};

export const receive_news = post => {

  return {
    type: "DISPLAY_NEWS",
    data: post
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

const apiKey = "3fa05f29af4f4dcb8074edbb2485afe3"




export const thunk_action_creator = searchString => {

  const url = `https://newsapi.org/v2/everything?q=${searchString}&sortBy=publishedAt&apiKey=${apiKey}`

  newsStore.dispatch(fetch_news());
  return function(dispatch, getState) {
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_news(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};