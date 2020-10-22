import React from 'react';
import { Card } from "../Card/Card";

export const Home: React.FC = () => {

  const description = `If you’re looking for help on your next web development project, you’ve come to the right place`;

  return (
    <div>
      <Card title={"Home"} description={description} />
    </div>
  );
};
