import React from "react";
import { urls } from '../../../constants/const';

interface ICardHeaderProps {
  title: string;
  url: string;
}

const CardHeader = (props: ICardHeaderProps) => {

  const url = props.url ? props.url : urls.PHOTO_DEFAULT_URL

  const style = {
    backgroundImage: `url("${url}")`
  };

  return (
    <div style={style}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default CardHeader;
