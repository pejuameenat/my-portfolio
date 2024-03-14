import React from 'react';
import linkedIn from '../assets/linkedin.png';
import twitter from '../assets/twitter2.png';
import github from '../assets/github.png';

function Socials(){
    return (
      <ul
        className="nav col-md-4 justify-content-end list-unstyled d-flex"
        id="ul_class"
      >
        <li className="ms-3 inline">
          <a
            className="text-body-secondary"
            aria-label="linkedin link"
            href="https://www.linkedin.com/in/aminat-sulaimon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img src={linkedIn} alt="linkedin" width="30" height="30" />
          </a>
        </li>
        <li className="ms-3 inline">
          <a className="text-body-secondary" href="#">
            {' '}
            <img src={twitter} alt="twitter" width="30" height="30" />
          </a>
        </li>
        <li className="ms-3 inline">
          <a
            className="text-body-secondary"
            href="https://github.com/pejuameenat"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img src={github} alt="twitter" width="30" height="30" />
          </a>
        </li>
      </ul>
    )

}

export default Socials;