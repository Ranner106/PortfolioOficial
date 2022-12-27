import React from 'react';
import PropTypes from 'prop-types';
import { NavbarStyles } from './style';

const links = ['Home', 'About', 'Projects', 'Contact'];

function Navbar({ toggled, onLinkClick }) {
  return (
    <NavbarStyles toggled={toggled}>
      <ul>
        {links.map((item) => (
          <li key={item}>
            <a
              onClick={onLinkClick}
              href={`#${item === 'Home' ? 'top' : item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </NavbarStyles>
  );
}

Navbar.propTypes = {
  toggled: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navbar;
