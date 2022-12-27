import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { logo } from '../../images';
import { HeaderContainer } from './style';
import Navbar from '../Navbar/Navbar';

function Header() {
  const [toggleLinks, setToggleLinks] = useState(false);

  const toggleMenu = () => setToggleLinks(!toggleLinks);
  return (
    <>
      <HeaderContainer id="Home" toggled={toggleLinks}>
        <div className="image-content">
          <img src={logo} alt="Ranner de Paula Logo" width={200} />
        </div>

        {!toggleLinks && (
          <AiOutlineMenu
            size={40}
            className="burger-icon"
            onClick={toggleMenu}
          />
        )}
        {toggleLinks && (
          <AiOutlineClose
            size={40}
            className="burger-icon"
            onClick={toggleMenu}
          />
        )}
      </HeaderContainer>
      <Navbar toggled={toggleLinks} onLinkClick={toggleMenu} />
    </>
  );
}

export default Header;
