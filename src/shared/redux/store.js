import {createStore,applyMiddleware} from "redux";
import cityReducer from "../../Cities/Reducers/cityReducer";
import apiMiddleware from "./middleware";

const store=createStore(cityReducer,applyMiddleware(apiMiddleware));

export default store;