import {
  OPEN_MODAL,
  ModalActionTypes,
  CLOSE_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL
} from "./types";

export function openModal(): ModalActionTypes {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal(): ModalActionTypes {
  return {
    type: CLOSE_MODAL
  };
}

export function openEditModal(): ModalActionTypes {
  return {
    type: OPEN_EDIT_MODAL
  };
}

export function closeEditModal(): ModalActionTypes {
  return {
    type: CLOSE_EDIT_MODAL
  };
}
