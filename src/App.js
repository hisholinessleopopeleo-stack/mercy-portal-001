
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="title">Bishop of Rome – Mercy Portal</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/support">Get Support</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}
