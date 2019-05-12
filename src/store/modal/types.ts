export interface ModalState {
  modalState: boolean,
  modalEditState: boolean,
}

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL'
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL'


interface openModalAction {
  type: typeof OPEN_MODAL
}

interface closeModalAction {
  type: typeof CLOSE_MODAL
}

interface openEditModalAction {
  type: typeof OPEN_EDIT_MODAL
}

interface closeEditModalAction {
  type: typeof CLOSE_EDIT_MODAL
}

export type ModalActionTypes = openModalAction | closeModalAction | openEditModalAction | closeEditModalAction