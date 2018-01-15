import React, { Component } from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import './AuthContainer.scss'

/** Holds login and signup and other auth components in a tabbed container. */
class AuthContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'login', // defaults to login
        }
    }

    render() {
        let body = null
        if (this.state.selectedTab === 'login') body = <Login />
        else body = <Signup />
        return (
            <div id="tabContainer">
                <div id="tabHeader">
                    <button style={this.styleTab('login')} className="tab" onClick={() => this.onTabClick('login')}>Login</button>
                    <button style={this.styleTab('signup')} className="tab" onClick={() => this.onTabClick('signup')}>Signup</button>
                </div>
                <div id="tabBody">
                    {body}
                </div>
            </div>
        )
    }

    onTabClick(selectedTab) {
        this.setState({selectedTab:selectedTab})
    }

    styleTab(selectedTab) {
        if (this.state.selectedTab === selectedTab) return {backgroundColor:'#ccc'}
        else return {backgroundColor:'whitesmoke'}
    }
}

export default AuthContainer
