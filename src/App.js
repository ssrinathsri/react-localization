import React, { useState, useEffect } from "react";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Header() {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(window.localStorage.i18nextLng)
  const handleLangugageClick = (e) => {
    i18next.changeLanguage(e.target.value)
  }
  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      setCurrentLanguage(lng)
    })
  }, [])
  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  // }

  return (
    <div className="App">
      <nav className="navbar">
        <select value={currentLanguage} onChange={handleLangugageClick} className="btn btn-default btn-sm" style={{ float: 'right' }} >
          <option value="en">{t('English')}</option>
          <option value="te">{t('తెలుగు')}</option>
          <option value="hi">{t('हिंदी')}</option>
          <option value="kn">{t('ಕನ್ನಡ')}</option>
          <option value="ta">{t('தமிழ்')}</option>
          <option value="gu">{t('ગુજરાતી')}</option>
          <option value="mr">{t('मराठी')}</option>
          <option value="ml">{t('മലയാളം')}</option>
        </select>
        {/* <button onClick={()=>handleClick('en')} > English </button>
          <button onClick={()=>handleClick('te')} > తెలుగు </button>
          <button onClick={()=>handleClick('hi')} > हिंदी </button>
          <button onClick={()=>handleClick('kn')} > ಕನ್ನಡ </button>
          <button onClick={()=>handleClick('ta')} > தமிழ் </button>
          <button onClick={()=>handleClick('gu')} > ગુજરાતી </button>
          <button onClick={()=>handleClick('mr')} > मराठी </button>
          <button onClick={()=>handleClick('ml')} > മലയാളം </button> */}
      </nav>
    </div>
  );
}

function Section1() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>{t('Company.1')}</h2><br />
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br /><button className="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>
          </div>
        </div>
      </div>

    </div>
  );
}


function Section2() {
  return (
    <div>
      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2><br />
            <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
            <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

function Section3() {
  return (
    <div>
      <p> Fininza </p>
    </div>
  );
}


export default App;
