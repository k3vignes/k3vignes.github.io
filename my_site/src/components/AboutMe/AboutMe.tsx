import React from 'react';
import { Parallax } from "../Parallax/Parallax";
import { Card } from "../Card/Card";
import './AboutMe.scss';

export const AboutMe: React.FC = () => {

  const description = `My name is Kajan Vigneswaran and I work as a Full Stack Software Engineer at a FinTech startup
   company called Bolt. I have over 2 years of professional work experience in web development, and on the side I do
   freelance web development work. So, if you have a project you need help with, reach out to me. I have experience
   with a wide variety of web technologies, including but not limited to: ReactJS, PHP, Python, GoLang, WordPress,
   and more. I’m extremely client focused and strive to deliver a product that meets my client’s expectations.`;

  return (
    <div>
      <Parallax cssClass={"aboutMeParallax"} />
      <Card title={"About Me"} description={description}/>
    </div>
  );
};
