const element = (
    import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CongratsCard = () => {
  return (
    <div className="congrats-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png"
        alt="Congrats"
        className="background-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="Profile"
        className="profile-img"
      />
      <h1 className="title">Congratulations!</h1>
      <p className="message">Way to go on your achievement!</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="Watch"
        className="watch-img"
      />
    </div>
  );
};

ReactDOM.render(<CongratsCard />, document.getElementById('root'));

  )
  
ReactDOM.render(element, document.getElementById('root'))