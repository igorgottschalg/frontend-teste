import React, { useState } from 'react';

import {
  Container,
} from './styles';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Container opened={ isOpen }>
      <div className="background" onClick={handleToggleMenu} />
      
      <div className="menu-right">
        <div className="burger" onClick={handleToggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>
    </Container>
  );
}