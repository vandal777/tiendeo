import React from "react";

interface ICardHeaderProps {
  title: string;
  url: string;
}

const CardHeader = (props: ICardHeaderProps) => {

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default CardHeader;
