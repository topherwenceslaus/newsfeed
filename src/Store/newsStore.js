import { createStore, applyMiddleware } from "redux";
import newsReducer from "../Reducers/newsReducer";
import thunk from "redux-thunk";

const newsStore = createStore(newsReducer, applyMiddleware(thunk));

window.store= newsStore;

export default newsStore;