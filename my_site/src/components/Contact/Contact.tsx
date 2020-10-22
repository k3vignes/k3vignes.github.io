import React from 'react';
import { Card } from "../Card/Card"
import { Parallax } from "../Parallax/Parallax";

export const Contact: React.FC = () => {

  const description = `If you need any help with any web development projects, feel free to send me an email at
  kajan.vigneswaran@gmail.com with a description of the project and the technology involved.`;
  return (
    <div>
      <Parallax cssClass={"contactParallax"} />
      <Card title={"Contact"} description={description} />
    </div>
  );
};
