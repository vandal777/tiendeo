import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { ICard } from '../../store/cards/types';
import { closeEditModal } from '../../store/modal/actions';
import { addEditCardAsync } from '../../store/cards/actions';

class EditModal extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleEditCard() {
    const { title, url, description } = this.state
    const id = this.props.editCard.id;
    const card: ICard = {
      id,
      title,
      url,
      description
    }
    title !== '' && description !== '' && this.props.addEditCard(card)
  }

  render() {
    return (
      this.props.modalEditState &&
      <div className={"modal display-block"}>
        <section className="modal-main">
          <input type="text" placeholder={'Titulo'} defaultValue={this.props.editCard.title} name="title" onChange={this.handleInputChange} />
          <input type="text" placeholder={'Descripcion'} defaultValue={this.props.editCard.description} name="description" onChange={this.handleInputChange} />
          <input type="text" placeholder={'Url'} defaultValue={this.props.editCard.url} name="url" onChange={this.handleInputChange} />
          <button onClick={this.handleEditCard} > Finish edit </button>
          <button onClick={this.props.closeEditModal}> Close Modal </button>
        </section >
      </div >
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    editCard: state.cards.editCard,
    modalEditState: state.modal.modalEditState
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeEditModal: () => dispatch(closeEditModal()),
    addEditCard: (card: ICard) => dispatch(addEditCardAsync(card)).then(() => dispatch(closeEditModal()))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
