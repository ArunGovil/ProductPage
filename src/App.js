import React from 'react';
import './styles.css';
import StatsCard from './components/statsCard';
import ExtraCard from './components/excCard';
import intro from './assets/intro.png';
import future from './assets/demo.png';

const App = () => {
  return (
    <div className="main">
      <div className="navbar">
        <h2 className="logo">YouPay</h2>
      </div>
      <div className="intro">
        <div className="action">
        <h1 className="headline">Payments made Simple</h1>
        <p className="biline">Paying your bills have never been this easy!</p> <br />
        <a href="#" className="download">Download the App</a>
        </div>
        <div className="introimg">
          <img className="imgintro" src={intro} alt="intro" />
        </div>
      </div>
      <div className="statistics">
        <h1 className="subhead">Statistics</h1>
        <div className="cards">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
        </div>
      </div>
      <div className="future">
        <div className="futuretext">
          <h1>Future is Here!</h1>
          <p>With YouPay, you are all set to explore <br />
          the future of payments</p>
        </div>
        <div className="futureimg">
          <img className="imgfuture" src={future} alt="future" />
        </div>
      </div>
      <div className="exclusive">
        <h1>YouPay Exclusives</h1>
        <div className="extras">
          <ExtraCard />
          <ExtraCard />
          <ExtraCard />
        </div>
      </div>
      <div className="earlyaccess">
        <h1>Get Early Access</h1>
        <p>Download the App to get your early access right away!</p> <br />
        <a className="download" href="#">Register Now</a> 
      </div>
      <div className="footer">
        <div className="links">
          <div className="group">
            <h3>ABOUT</h3>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
          </div>
          <div className="group">
            <h3>SECURITY</h3>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
          </div>
          <div className="group">
            <h3>TEAM</h3>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
          </div>
          <div className="group">
            <h3>CONTACT</h3>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
            <a href="#" className="link">Link</a> <br/>
          </div>
        </div>
        <div className="brandline">
          <h2>YouPay</h2>
        </div>
      </div>
      <div className="bottomline">
        <p>Made with love by ArunGovil</p>
      </div>
    </div>
  );
};

export default App;