import React from "react";
import "./style.css";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import { ICard } from '../../store/cards/types';
import { urls } from "../../constants/const";

const Card = (props: ICard) => {
  const url = props.url ? props.url : urls.PHOTO_DEFAULT_URL

  const style = {
    backgroundImage: `url("${url}")`
  };

  const card = props;
  return (
    <div style={style} className={"card-container"}>
      <CardHeader title={card.title} url={card.url} />
      <CardBody card={card}/>
    </div>
  );
};

export default Card;
