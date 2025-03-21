import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Odd Perspectives</h1>
        <nav>
          <a href="#hosts">Hosts</a>
          <a href="#episodes">Episodes</a>
          <a href="#subscribe">Subscribe</a>
        </nav>
      </header>

      <section className="hero">
        <img
          src="OP.png"
          alt="Odd Perspectives Hero"
          className="hero-image"
        />
        <h2>Exploring the Unusual</h2>
        <p>
          A podcast diving deep into unconventional ideas, fringe theories, and perspectives that challenge the norm.
        </p>
      </section>

      <section className="hosts" id="hosts">
        <h2>Meet Your Hosts</h2>
        <div className="host-grid">
          <div className="host-card">
            <img src="raviOP.jpg" alt="Host 1" />
            <h3>Host One</h3>
            <p>Bringing clarity to chaos, and chaos to clarity.</p>
          </div>
          <div className="host-card">
            <img src="joeyOP.jpg" alt="Host 2" />
            <h3>Host Two</h3>
            <p>Asking the strange questions so you don't have to.</p>
          </div>
          <div className="host-card">
            <img src="Brent.jpg" alt="Host 2" />
            <h3>Host Two</h3>
            <p>Asking the strange questions so you don't have to.</p>
          </div>
        </div>
      </section>

      <section className="episodes" id="episodes">
        <h2>Latest Episodes</h2>
        <ul className="episode-list">
          <li>
            <h4>Episode 42: The Simulation We Ignore</h4>
            <p>Is reality just a clever illusion?</p>
          </li>
          <li>
            <h4>Episode 41: Dreams, Dimensions & Dread</h4>
            <p>When your sleep talks back.</p>
          </li>
          <li>
            <h4>Episode 40: Signals in the Static</h4>
            <p>Uncovering meaning in modern noise.</p>
          </li>
        </ul>
      </section>

      <section className="subscribe" id="subscribe">
        <h2>Stay in the Loop</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer>
        <small>&copy; {new Date().getFullYear()} Odd Perspectives • All rights reserved</small>
      </footer>
    </div>
  );
}

export default App;
