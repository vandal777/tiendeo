import { cardsReducer } from "./cards/reducers";
import { modalReducer } from "./modal/reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
