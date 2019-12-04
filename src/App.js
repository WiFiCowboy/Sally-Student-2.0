import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <main>
       
      <header>
         
        <h1>About Me</h1> 
      </header> 
      <section>
         
        <header>
           
          <h2>{props.name}</h2> 
        </header> 
        <img
          src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@.V1_UX214_CR0,0,214,317_AL.jpg"
          alt="It's Sally!"
        /> 
        <p>I'm an aspiring full stack web developer.</p> 
      </section> 
      <section>
         
        <h3>Education</h3> <p>B.S. Computer Science, UCLA</p> 
      </section> 
      <section>
         
        <h3>Work Experience</h3> 
        <ul>
           
          <li>
            <p>Web Developer at Google from 2018 - Present</p>
          </li> 
          <li>
            <p>IT Intern at Facebook from 2017 - 2018</p>
          </li> 
        </ul> 
      </section> 
      <address>
         
        <header>
           
          <h2>Contact</h2> 
        </header> 
        <p>
          <a href="mailto:sallystudent@gmail.com" target="_blank">
            Email
          </a>
        </p> 
        <p>Phone: 999-999-9999</p> 
      </address> 
      <footer>© 2019 {props.name}</footer> 
    </main>
  );
}

export default App;
