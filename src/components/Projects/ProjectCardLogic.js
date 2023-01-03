import React from 'react';
import RoadToJS from './../../assests/project-img/project-1.png';
import EmojiKit from './../../assests/project-img/project-2.png';
import WeatherApp from './../../assests/project-img/project-3.png';
import DryFruitsDarbar from './../../assests/project-img/project-4.png';
import PigGame from './../../assests/project-img/project-5.png';
import GuessMyNumber from './../../assests/project-img/project-6.png';
import DrumKit from './../../assests/project-img/project-7.png';
import Calculator from './../../assests/project-img/project-8.png';
import ExpenseTracker from './../../assests/project-img/project-9.png';
import Stack1 from './../../assests/project-stack-img/project-stack-1.png';
import Stack2 from './../../assests/project-stack-img/project-stack-2.png';
import Stack3 from './../../assests/project-stack-img/project-stack-3.png';
import Stack4 from './../../assests/project-stack-img/project-stack-4.png';
import Stack5 from './../../assests/project-stack-img/project-stack-5.png';

const ProjectCardLogic = () => {
  const projectData = [
    {
      image: RoadToJS,
      stack: Stack3,
      title: 'Road To JS',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/road-to-js-icp-3-group-d-',
      demoLink: 'https://road-to-js.netlify.app/',
      description:
        'Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place',
    },
    {
      image: EmojiKit,
      stack: Stack5,
      title: 'Emoji Kit',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/emoji-kit',
      demoLink: 'https://emoji-kit-icp.netlify.app/',
      description:
        'Simple emoji toolkit to change background color, size and rotation of emoji with the help of useState.',
    },
    {
      image: WeatherApp,
      stack: Stack5,
      title: 'Weather App',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/online-weather-app',
      demoLink: 'https://online-weather-app-icp.netlify.app/',
      description:
        'This is simple React Project which gives you weather updates by just entering city name',
    },
    {
      image: DryFruitsDarbar,
      stack: Stack1,
      title: 'Dry Fruits Darbar',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/dry-fruits-darbar-icp-3-group-f',
      demoLink: 'https://dry-fruits-darbar.netlify.app/',
      description:
        'Dry Fruits Darbar is an E-commerce platform where you can buy premium quality dry fruits',
    },
    {
      image: PigGame,
      stack: Stack2,
      title: 'Pig Game',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/pig-game',
      demoLink: 'https://pig-game-icp.netlify.app/',
      description:
        'Pig game is a simple dice game. You win by being the first player to score 100 or more points.',
    },
    {
      image: GuessMyNumber,
      stack: Stack2,
      title: 'Guess My Number',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/guess-my-number-game',
      demoLink: 'https://guess-my-number-game-icp.netlify.app/',
      description:
        'Guess the secret number present in the box. If your guess is too high or too low, you will get a hint.',
    },
    {
      image: DrumKit,
      stack: Stack2,
      title: 'Drum Kit',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/drum-kit',
      demoLink: 'https://drum-kit-icp.netlify.app/',
      description:
        'A web-based Drum music game for playing the drum. This can give you an experience of drum playing.',
    },
    {
      image: Calculator,
      stack: Stack2,
      title: 'Calculator',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/Calculator',
      demoLink: 'https://calculator-icp.netlify.app/',
      description:
        'Simple Calculator which can do addition, subtraction, multiplication and division.',
    },
    {
      image: ExpenseTracker,
      stack: Stack4,
      title: 'Expense Tracker',
      color: 'card-color-1',
      codeLink: 'https://github.com/satyampund/expense-tracker',
      demoLink: 'https://expense-tracker-icp.netlify.app/',
      description:
        'Expense tracker helps us to analyse our expenses by storing them in a systematic tabular form',
    },
  ];

  const projectMap = projectData.map((ele) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="image-container">
            <img className="card-img" src={ele.image} alt="Roadtojs"></img>
            <img className="card-back-img" src={ele.stack} alt="Roadtojs"></img>
          </div>
          <div className={`card-body ${ele.color}`}>
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text">{ele.description}</p>
            <a href={ele.codeLink}>
              <button className="css-button-shadow-border-sliding--black me-3">Code</button>
            </a>
            <a href={ele.demoLink}>
              <button className="css-button-shadow-border-sliding--black ms-3 ">Demo</button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectMap}</>;
};

export default ProjectCardLogic;
