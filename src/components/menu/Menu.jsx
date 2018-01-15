import React, { Component } from 'react';
import MenuItem from './menuItem/MenuItem'
import './Menu.scss'

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <span id="menuTitle">Menu</span>
                <MenuItem title="Password Generator" to="/pwGen" />
                <MenuItem title="Password Vault" to="/pwVault" />
            </div>
        );
    }
}

export default Menu;
