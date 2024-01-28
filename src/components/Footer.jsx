import React from 'react';
 import Socials from './Socials';

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return(
        <div id="footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
               <div className="col-md-4 d-flex align-items-center">
                   <span className="mb-3 mb-md-0 text-body-secondary"><a className="navbar-brand" href="#"> <strong className="small">Port<span>folio</span></strong></a> © {year} Created by, Aminat.</span>
               </div>
              <Socials/>
           </footer>
        </div>
    )
}

export default Footer;