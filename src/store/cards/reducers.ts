import { ADD_EDIT_CARD, ICard } from "./types";
import {
  CardsState,
  CardActionTypes,
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD
} from "./types";

const editCard: ICard = {
  id: 0,
  title: "",
  description: "",
  url: ""
};

const initialState: CardsState = {
  cards: [],
  editCard: editCard
};

export function cardsReducer(
  state = initialState,
  action: CardActionTypes
): CardsState {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case EDIT_CARD:
      return {
        ...state,
        editCard: action.payload
      };
    case ADD_EDIT_CARD:
      const cards: ICard[] = state.cards;
      cards.forEach(function(part, index, theArray) {
        if (part.id === action.payload.id) {
          theArray[index] = action.payload;
        }
      });
      return {
        ...state,
        cards: [...cards]
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.slice(0, action.payload),
          ...state.cards.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}
