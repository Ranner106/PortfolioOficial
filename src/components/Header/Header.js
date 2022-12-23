import React from 'react';
import { logo } from '../../images';
import { HeaderContainer } from './style';

function Header() {
  return (
    <HeaderContainer>
      <div className="image-content">
        <img src={logo} alt="Ranner de Paula Logo" width={200} />
      </div>
    </HeaderContainer>
  );
}

export default Header;
