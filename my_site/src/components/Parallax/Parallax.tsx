import React from 'react';
import './Parallax.scss';

type IParallaxProps = {
    cssClass: string,
    headerText?: string,
}

export const Parallax: React.FC<IParallaxProps> = props => {
  return (
      <div className={props.cssClass}>
        {props.headerText && (
            <h1 className={"header-font"}>
                {props.headerText}
            </h1>
        )}
      </div>
  );
};
