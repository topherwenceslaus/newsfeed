const initialState = {
  newsData: {}
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return Object.assign({}, state, {
        newsData: {}
      });
    case "DISPLAY_NEWS":
      return Object.assign({}, state, {
        newsData: action.data.articles
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default newsReducer;