import { ModalState, ModalActionTypes, OPEN_MODAL, CLOSE_MODAL, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from './types';

const initialState: ModalState = {
  modalState: false,
  modalEditState: false
};

export function modalReducer(state = initialState, action: ModalActionTypes): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalState: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalState: false
      };
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        modalEditState: true
      };
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        modalEditState: false
      };
    default:
      return state;
  }
}
