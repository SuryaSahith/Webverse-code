import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

// Define the component for the Home page
const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Hostel Management system!</p>
  </div>
);

// Define the component for the About page
const About = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the About page of the Hostel Management system.</p>
  </div>
);

// Define the component for the Contact page
const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>Contact us for any inquiries regarding the Hostel Management system.</p>
  </div>
);

// Define the main App component
const App = () => (
  <Router>
    <div>
      <header>
        <h1>Hostel Management</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
    </div>
  </Router>
);

export default App;
