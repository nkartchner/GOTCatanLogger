import { createStore, combineReducers } from "redux";
import gameReducer from "./reducers/reducers";
const rootReducer = combineReducers({ game: gameReducer });
const gameStore = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default gameStore;