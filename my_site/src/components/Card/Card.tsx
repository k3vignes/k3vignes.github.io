import React from 'react';
import './Card.scss';

type ICardProps = {
    title: string,
    description: string,
};

export const Card: React.FC<ICardProps> = props => {

  return (
    <div className={"container"}>
         <div>
          <h1>
            {props.title}
          </h1>
        </div>
        <div>
            {props.description}
        </div>
    </div>
  );
};
