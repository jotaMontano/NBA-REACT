import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './sideNav.css';


const SideNavItems = () => {

    const items = [
        {
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'file-alt',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'sign-in-alt',
            text: 'Sing in',
            link: '/sing-in'
        },
        {
            type: 'option',
            icon: 'sign-out-alt',
            text: 'Sing out',
            link: '/sing-out'
        }
        
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>

    )
}

export default SideNavItems;