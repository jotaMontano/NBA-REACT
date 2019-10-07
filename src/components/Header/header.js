import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNav from './SideNav/sideNav';
import { Row, Col } from 'react-bootstrap';


const Header = (props) => {

    const navBars = () => (

        <FontAwesome name="bars"
            onClick={props.onOpenNav}
            style={{
                color: 'white',
                padding: '10px',
                cursor: 'pointer'
            }} />


    )
    const logo = () => (

        <Link to="/" className="logo">
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>

    )

    return (
        <Row className='d-flex align-items-center header headerOpt'>
            <Col md={12}>
                <header >
                    <SideNav {...props} />
                    {navBars()}
                    {logo()}
                </header>
            </Col>
        </Row>
    )
}

export default Header;