import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default () => {
  return (
    <div>
      <Link to='/gifs' className="menu">Gifs</Link>
      <Link to='/about' className="menu">About</Link>
    </div>
  );
}