import React from "react";
import "./App.css";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { ICard } from "../store/cards/types";
import ButtonAdd from "../components/Buttons/ButtonAdd/ButtonAdd";
import Modal from '../components/Modal/Modal';
import EditModal from "../components/Modal/EditModal";

interface IAppProps {
  cards: ICard[],
}

export class App extends React.Component<IAppProps, any> {

  render() {
    const cards: ICard[] = this.props.cards;

    return (
      <div className="app-container">
        <Modal />
        <EditModal />
        {
          cards.length > 0
            ? cards.map((card) => (<Card key={card.id} {...card} />))
            : <span>prueba a añadir una tarjeta</span>
        }
        <ButtonAdd />
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    cards: state.cards.cards,
  };
};

export default connect(mapStateToProps)(App);
