import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link id="title" to="/">Password Util</Link>
                <Link className="auth" to="/auth">Login</Link>
            </div>
        )
    }
}

export default Header;
