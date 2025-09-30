
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="landing-page">
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src={viteLogo} alt="Vite logo" className="logo" />
            <img src={reactLogo} alt="React logo" className="logo react" />
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Build Faster, Ship Smarter</h1>
          <p>Vite + React makes your development experience seamless and fun.</p>
          <button onClick={() => setCount(count + 1)}>
            Click me {count} {count === 1 ? 'time' : 'times'}
          </button>
        </div>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Fast HMR</h3>
            <p>Edit your files and see instant updates in the browser.</p>
          </div>
          <div className="card">
            <h3>Modern React</h3>
            <p>Enjoy hooks, components, and the latest React features.</p>
          </div>
          <div className="card">
            <h3>Optimized Build</h3>
            <p>Vite gives you lightning-fast builds for production.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
        <p>This landing page demonstrates a modern Vite + React setup with a stylish UI.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Get in touch to learn more or collaborate!</p>
        <button>Email Us</button>
      </section>

      <footer>
        <p>&copy; 2025 Memo Landing. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

