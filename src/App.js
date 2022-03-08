
import { useState, useEffect } from 'react';
import './App.css';
import { messages } from './messages';

function App() {


  const [language, setLanguage] = useState("es");

  



  return (

    
    <div className="App">

      <div id="introduction" className="fullscreen">
        <div className="center">
          <span className="fancy-font">
            {messages["intro"][language]}
          </span>
        </div>
      </div>

      <div id="step-two" className="fullscreen">
        <div className="center">
          <span className="fancy-font">
            {messages["second-step"][language]}
          </span>
        </div>
      </div>

      
      <div id="step-three" className="fullscreen">
        <div className="center flex-column">
          <span className="fancy-font">
            {messages["third-step"][language]}
          </span>

          <div id="button-container">
            <button className='button'>{messages["yes"][language]}</button>
            <button className='button'>{messages["no"][language]}</button>
          </div>


        </div>
      </div>

    <div id="language-selector">
      <span onClick={() => {setLanguage("en")}}>EN</span>|
      <span onClick={() => {setLanguage("es")}}>ES</span>
    </div>

    </div>
    

  );
}

export default App;
