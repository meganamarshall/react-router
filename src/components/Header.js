import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>All the colors</h1>
      <nav>
        <Link to="/red">Red</Link>
        <br></br>
        <Link to="/blue">Blue</Link>
        <br></br>
        <Link to="/yellow">Yellow</Link>
        <br></br>
        <Link to="/random">Random Color</Link>
      </nav>
    </header>
  );
}
