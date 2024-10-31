import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './Projects'
function App() {
  return (
    <>
      <div id = "first_slide" className = "slide">
        <h1>Hi,</h1>
        <h1>I am Dima,</h1>
        <h1>a developer.</h1>
      </div>

      <div id = "second_slide" className = "slide">
        <p>I enjoy problem-solving in math and computer science.</p>
        <p>Below are some of the projects I've built.</p>
      </div>

      <div id = "third_slide" className = "slide">
        <Projects/>
      </div>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/dmitrii-pavlov-852913299/" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled.png" alt="LinkedIn" class="icon"/>
        </a>
        <a href="https://github.com/DmitriiPavlov" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" class="icon"/>
        </a>
        <a href="mailto:dmitry.pavlov.rus@gmail.com">
            <img src="https://img.icons8.com/ios-filled/50/000000/mailing.png" alt="Email" class="icon"/>
        </a>
    </div>
    </>
  )
}

export default App
