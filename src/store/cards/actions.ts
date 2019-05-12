import { ICard, ADD_CARD, CardActionTypes, DELETE_CARD, EDIT_CARD, ADD_EDIT_CARD } from './types';

export function addCard(newCard: ICard): CardActionTypes {
  return {
    type: ADD_CARD,
    payload: newCard
  };
}

export function addCardAsync(newCard: ICard): any {
  return function(dispatch: any) {
    dispatch(addCard(newCard));
    return Promise.resolve();
  };
}

export function deleteCard(idCard: number): CardActionTypes {
  return {
    type: DELETE_CARD,
    payload: idCard
  };
}

export function editCard(card: ICard): CardActionTypes {
  return {
    type: EDIT_CARD,
    payload: card
  };
}

export function editCardAsync(card: ICard): any {
  return function(dispatch: any) {
    dispatch(editCard(card));
    return Promise.resolve();
  };
}

export function addEditCard(card: ICard): CardActionTypes {
  return {
    type: ADD_EDIT_CARD,
    payload: card
  };
}

export function addEditCardAsync(card: ICard): any {
  return function(dispatch: any) {
    dispatch(addEditCard(card));
    return Promise.resolve();
  };
}