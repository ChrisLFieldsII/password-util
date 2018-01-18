import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { userLoggedOut } from "../../redux/actions";
import './Header.scss'

class Header extends Component {

    render() {
        console.log('header props:',this.props)
        let user = this.props.user

        let heading = null
        if (user.loggedIn) heading = <h1 id="welcome">Welcome {user.name}!</h1>

        let link = null
        if (!user.loggedIn) link = <Link className="auth" to="/auth">Login</Link>
        else link = <Link className="auth" to="/auth" onClick={this.props.dispatchLogout}>Logout</Link>


        return (
            <div id="header">
                <Link id="title" to="/">Password Util</Link>
                {heading}
                {link}
            </div>
        )
    }
}

/** Gives Header component dispatchLogout prop that sends userLoggedOut action to redux store */
const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => dispatch(userLoggedOut())
    }
}

export default connect(null, mapDispatchToProps)(Header);
