import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal, faUsers, faMailBulk, faTv,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <React.Fragment>
    <div className="navbar">
      <div className="navbar-inner">
        <div className="icons-container">
          <button id="school-tab" className="icon" type="button">
            <FontAwesomeIcon icon={faTerminal} size="3x" />
          </button>
          <button id="tech-tab" className="icon" type="button">
            <FontAwesomeIcon icon={faUsers} size="3x" />
          </button>
          <button id="google-tab" className="icon" type="button">
            <FontAwesomeIcon icon={faMailBulk} size="3x" />
          </button>
          <button id="social-tab" className="icon" type="button">
            <FontAwesomeIcon icon={faTv} size="3x" />
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
);
export default Navbar;
