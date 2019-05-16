import React from 'react';
import './style.css';
import { connect } from 'react-redux';
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
    this.setEditCard = this.setEditCard.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
componentDidMount() {
      this.setState({
      title: this.props.editCard.title,
      description: this.props.editCard.description,
      url: this.props.editCard.url
    });
}

  handleEditCard() {
    let card: ICard = {
      id: 0,
      title: '',
      url: '',
      description: ''
    };
    card.id = this.props.editCard.id;
    card.title = this.state.title;
    card.url = this.state.url;
    card.description = this.state.description;
    console.log('estate', this.state);
    console.log('card', card);
    card.title !== '' &&
      card.description !== '' &&
      this.props.addEditCard(card);
  }

  setEditCard() {}

  render() {
    return (
      this.props.modalEditState && (
        <div className={'modal display-block'}>
          <section className="modal-main">
            <input
              type="text"
              placeholder={'Titulo'}
              defaultValue={this.props.editCard.title}
              name="title"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder={'Descripcion'}
              defaultValue={this.props.editCard.description}
              name="description"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder={'Url'}
              defaultValue={this.props.editCard.url}
              name="url"
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleEditCard}> Finish edit </button>
            <button className={'close-cta'} onClick={this.props.closeEditModal}>
              {' '}
              X{' '}
            </button>
          </section>
        </div>
      )
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
    addEditCard: (card: ICard) =>
      dispatch(addEditCardAsync(card)).then(() => dispatch(closeEditModal()))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
