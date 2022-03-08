
import React, { useState, useRef } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import './App.css';
import { messages } from './messages';
import { HeartDrawing } from './HeartDrawing';

function App() {


  const [language, setLanguage] = useState("es");
  const [answer, setAnswer] = useState(null);
  const finalRef = useRef(null);

  const finalizeAnswer = (response) => {
    setAnswer(response); 

    setTimeout(() => {
      finalRef.current.scrollIntoView({behavior: "smooth"});
    }, 100)
    
  }


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
            <button className='button' onClick={() => finalizeAnswer("yes")}>{messages["yes"][language]}</button>
            <button className='button' onClick={() => finalizeAnswer("no")}>{messages["no"][language]}</button>
          </div>


        </div>
      </div>

      <div ref={finalRef}>
        {
          answer === "yes" ?

            <div id="step-success" className="fullscreen">
              <div className="center flex-column">
                <span id="emoji-container">
                  🥰
                </span>

                <div className="fancy-font">
                  <span>{messages["success"][language]}</span>
                </div>
              </div>
            </div> : <></>
        }

        {
          answer === "no" ?

            <div id="step-success" className="fullscreen">
              <div className="center flex-column">
                <span id="emoji-container">
                  😵
                </span>

                <div className="fancy-font">
                  <span>{messages["fail"][language]}</span>
                </div>
              </div>
            </div> : <></>
        }

      </div>


      {<LanguageSelector setLanguage={setLanguage} />}
      
      <HeartDrawing></HeartDrawing>
    </div>


  );
}

export default App;


