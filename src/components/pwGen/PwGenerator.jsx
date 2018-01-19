import React, { Component } from 'react'
import PwGenForm from "./pwGenForm/PwGenForm";
import './PwGenerator.scss'

class PwGenerator extends Component {
    render() {
        return (
            <div id="pwGen">
                <h1>Password Generator</h1>
                <PwGenForm />
            </div>
        )
    }
}

export default PwGenerator
