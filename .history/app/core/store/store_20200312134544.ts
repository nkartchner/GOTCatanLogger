import { createStore, combineReducers } from "redux";
import gameReducer from "./reducers";

const gameStore = createStore(combineReducers({ game: gameReducer }));

export default gameStore;