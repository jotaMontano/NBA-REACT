import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavitems from './sideNavItems';

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '220px'
                }}
            >
               <SideNavitems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;