
import { useState } from 'react';
import './App.css';

const messages = {
  "intro": {
    "en": "Hello Selene",
    "es": "Hola Selene"
  },
  "second-step": {
    "en": "You told me to be creative and I could have done something cheesy like write you a message in the sky or send you a pamper but I want to make you something useful as well. Something we could build on.",
    "es": "Me dijiste que fuera creativo y podría haber hecho algo cursi como escribirte un mensaje en el cielo o enviarte un mimo, pero también quiero hacerte algo útil. Algo sobre lo que podamos construir."
  }

}

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

    <div id="language-selector">
      <span onClick={() => {setLanguage("en")}}>EN</span>|
      <span onClick={() => {setLanguage("es")}}>ES</span>
    </div>

    </div>

  );
}

export default App;
