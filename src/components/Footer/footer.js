import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config'


const Footer = () => {


    return (

        <footer className="row align-self-center footer">
            <div className="col-1">
                <Link to="/" className="logo moveImg">
                    <img alt="nba logo" src="/images/nba_logo.png" />
                </Link>
            </div>
            <div className="col-10 text-center right">
                @NBA {CURRENT_YEAR} All rights reserverd.
                </div>
        </footer>











    )
}

export default Footer;