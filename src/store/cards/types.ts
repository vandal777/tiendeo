export interface ICard {
  id: number;
  title: string;
  description: string;
  url: string;
}
export interface CardsState {
  cards: ICard[]
  editCard: ICard
}

export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const ADD_EDIT_CARD = 'ADD_EDIT_CARD'

interface SendCardAction {
  type: typeof ADD_CARD
  payload: ICard
}

interface deleteCardAction {
  type: typeof DELETE_CARD
  payload: number
}

interface editCardAction {
  type: typeof EDIT_CARD
  payload: ICard
}
interface addEditCardAction {
  type: typeof ADD_EDIT_CARD
  payload: ICard
}


export type CardActionTypes = SendCardAction | deleteCardAction | editCardAction | addEditCardAction