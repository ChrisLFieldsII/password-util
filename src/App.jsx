import React, { Component } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './App.scss'

class App extends Component {
    render() {
        return (
            <div id="gridContainer">
                <Header user={this.props.user} />
                <Menu user={this.props.user} />
                <Main user={this.props.user} />
                <Footer user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: {...state}
    }
}

export default withRouter(connect(mapStateToProps)(App))
//export default App
