import React from "react";
import "./style.css";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import { ICard } from '../../store/cards/types';


const Card = (props: ICard) => {
  const card = props;
  return (
    <div className={"card-container"}>
      <CardHeader title={card.title} url={card.url} />
      <CardBody card={card}/>
    </div>
  );
};

export default Card;
