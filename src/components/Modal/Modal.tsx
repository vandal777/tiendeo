import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { ICard } from '../../store/cards/types';
import { closeModal } from '../../store/modal/actions';
import { addCardAsync } from '../../store/cards/actions';

class Modal extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddCard() {
    const { title, url, description } = this.state
    const id = this.props.cards.length;
    const card: ICard = {
      id,
      title,
      url,
      description
    }
    title !== '' && description !== '' && this.props.addCard(card)
  }

  render() {
    return (
      this.props.modalState &&
      <div className={"modal display-block"}>
        <section className="modal-main">
          <input type="text" placeholder={'Titulo'} name="title" onChange={this.handleInputChange} />
          <input type="text" placeholder={'Descripcion'} name="description" onChange={this.handleInputChange} />
          <input type="text" placeholder={'Url'} name="url" onChange={this.handleInputChange} />
          <button className={"add-cta"} onClick={this.handleAddCard} > Add Card </button>
          <button className={"close-cta"} onClick={this.props.closeModal}>X</button>
        </section >
      </div >
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.cards,
    modalState: state.modal.modalState
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addCard: (card: ICard) => dispatch(addCardAsync(card)).then(() => dispatch(closeModal()))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
