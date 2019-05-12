import React from "react";
import { connect } from "react-redux";
import { deleteCard, editCardAsync } from '../../../store/cards/actions';
import { openEditModal } from '../../../store/modal/actions';
import { ICard } from '../../../store/cards/types';

interface ICardBodyProps {
  card: ICard
  editCard(card: ICard): void,
  deleteCard(number: number): void,
}

const CardBody = (props: ICardBodyProps) => {
  return (
    <div>
      <div className={"multiline-ellipsis"}>
        {props.card.description}
      </div>
      <div>
        <button onClick={() => props.editCard(props.card)}> Edit </button>
        <button onClick={() => props.deleteCard(props.card.id)}> Delete </button>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    editCard: (card: ICard) => dispatch(editCardAsync(card)).then(() => dispatch(openEditModal())),
    deleteCard: (idCard: number) => dispatch(deleteCard(idCard)),
  };
};

export default connect(null, mapDispatchToProps)(CardBody);

