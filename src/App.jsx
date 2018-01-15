import React, { Component } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div id="gridContainer">
                <Header />
                <Menu />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
