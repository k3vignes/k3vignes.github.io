import React from 'react';
import './Card.scss';

type ICardProps = {
    title: string,
    description: string,
};

export const Card: React.FC<ICardProps> = props => {

  return (
    <div className={"container"}>
         <div className={"leftHalf"}>
          <h1>
            {props.title}
          </h1>
        </div>
        <div className={"rightHalf"}>
            {props.description}
        </div>
    </div>
  );
};
