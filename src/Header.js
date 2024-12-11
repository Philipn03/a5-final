import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [name, setName] = useState('Simar');
  return (
    <header className="header">
      <h1>Hello! Welcome to your Personalized Digital Assistant</h1>
    </header>
  );
};

export default Header;
