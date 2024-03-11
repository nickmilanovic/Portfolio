import './App.css';
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import portfolioPic from './/portfolioPic.jpg';
import {Link, Element, animateScroll as scroll} from 'react-scroll';

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a onClick={scrollToTop} style={{cursor: 'pointer'}}>Home</a>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} duration={500}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-60}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          </li>
          <li className="nav-item">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Home() {
  return <div id="home"> {/* Home section content */} </div>;
}

function AboutMe(){
  return (<div id="about">
    <h1>About Me</h1>
    <img src={portfolioPic} alt="About Me" />
    <p>
    Hi there, and welcome! I'm Nick Milanovic, a software virtuoso from the humming cityscape of Hamilton, Ontario, 
    where the fusion of urban beats and serene nature inspires my digital creations. With a decorated academic chapter at Mohawk College, 
    where I emerged with honors, my adventure in tech took off amidst a kaleidoscope of languages from Python to Java and frameworks from React to Node.js.
    </p>
    <p>
    Dive into my portfolio and you'll discover a curated collection of my recent projects. Each showcase my journey through automating stock trades, 
    architecting full-stack web solutions and beyond. These projects are a glimpse into my world where meticulous code meets creative fervor, 
    delivering experiences that are as impactful as they are innovative. Let's embark on this digital odyssey together and craft a future punctuated by precision and ingenuity.
    </p>
  </div>
  )
}

function Portfolio(){
  return(
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        {/* Each project as a card */}
        <div className="project-card">
          <img src={require('/public/petstore.png')} alt="Pet Store Inventory" className="project-image" />
          <h2>Pet Store Inventory (React)</h2>
          <p>A dynamic inventory management system for a pet store built with React.</p>
          <a href="https://github.com/nickmilanovic/Pet_Store_Inventory" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="northwind.png" alt="North Wind Traders" className="project-image" />
          <h2>Northwind Traders (ASP.NET)</h2>
          <p>Database management website built for Northwind Traders with C# on ASP.NET framework using Model-View-Controller template.</p>
          <a href="https://github.com/nickmilanovic/Northwind_Traders" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src='blackjackers.png' alt='blackjackers' className='project-image' />
          <h2>BlackJackers (Python)</h2>
          <p>App that gives Black Jack players an edge when playing on online casinos with the method of card counting.</p>
          <a href="https://github.com/nickmilanovic/BlackJackers" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="lotr.png" alt="lotr" className='project-image' />
          <h2>Lord Of The Rings (Java)</h2>
          <p>Various data structures used to iterate over the Lord of The Rings novel to perform tasks.</p>
          <a href="https://github.com/nickmilanovic/Lord_Of_The_Rings" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="telegram.png" alt="telegram" className='project-image' />'
          <h2>Automated Telegram Channel (Python)</h2>
          <p>Signal channel for Telegram giving traders the opportunity to provide their trades autonomously.</p>
          <a href="https://github.com/nickmilanovic/AutomatedTelegramChannel" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className='project-card'>
          <img src="lebron.png" alt="lebron" className='project-image' />
          <h2>LeBron James FAQ AI Bot (Python)</h2>
          <p>AI Chat Bot built for discord answering FAQ about LeBron James.</p>
          <a href="https://github.com/nickmilanovic/LeBron_James_FAQ_Bot" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className='project-card'>
          <img src="maze.png" alt="maze" className='project-image' />
          <h2>AI Maze Solver (Python)</h2>
          <p>Comparison of 3 different algorithms to test maze solving efficiency.</p>
          <a href="https://https://github.com/nickmilanovic/AI_Maze_Solver" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className='project-card'>
          <img src="cart.png" alt="cart" className='project-image' />
          <h2>Rest API (PHP)</h2>
          <p>Rest API built in PHP for a shopping cart for an E-Commerce website.</p>
          <a href="https://github.com/nickmilanovic/Rest_API_Shopping_Cart" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState(''); // To hold the message
    const [showMessage, setShowMessage] = useState(false); // To show/hide the message

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_djb8g2k', 'template_dt7ud5q', form.current, {
          publicKey: 'nKih68ZxoJWV6rJ8C',
        })
        .then(
          () => {
            setMessage('Email sent.');
            setShowMessage(true);
            e.target.reset();
            setTimeout(() => setShowMessage(false), 5000); // Hide message after 3 seconds
          },
          (error) => {
            setMessage('Email not sent ' + error.text);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 5000); // Hide message after 3 seconds
          },
        );
    };
  return(
    <div id="contact">
      <h1>Contact Me</h1>
      {showMessage && <div className="notification">{message}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <br></br>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Navbar />
      <Element name="home">
        {/* Content for the Home section */}
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
