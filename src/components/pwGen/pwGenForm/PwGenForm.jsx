import React, { Component } from 'react'
import './PwGenForm.scss'

class PwGenForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            key: '',
            email: '',
            length: 8,
            generatedPw: ''
        }

        this.inputChange = this.inputChange.bind(this)
        this.genPw = this.genPw.bind(this)
    }

    render() {
        return (
            <form className="form">
                <div className="row">
                    <label>Password Key:</label>
                    <input type="text" name="key" value={this.state.key} onChange={this.inputChange} required autoFocus autoComplete="on" placeholder="Enter name of the service associated with password." />
                </div>

                <div className="row">
                    <label>Email/Username:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.inputChange} required autoComplete="on" placeholder="Enter email/username associated with password." />
                </div>

                <div className="row">
                    <label>Password Length:</label>
                    <input type="number" name="length" value={this.state.length} onChange={this.inputChange} required min="8" max="20" />
                    <span style={{color:'red',marginLeft:'5px'}}>(Min=8; Max=20)</span>
                </div>

                <button type="button" className="prim-btn" style={{margin:'0% 2%',width:'95%'}} onClick={this.genPw}>Generate Password</button>

                <div className="row">
                    <label>Generated Password:</label>
                    <input type="text" name="generatedPw" value={this.state.generatedPw} onChange={this.inputChange} readOnly placeholder="Generated password will appear here!" />
                </div>
            </form>
        )
    }

    inputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({[name]:value})
    }

    genPw() {
        console.log('clicked gen pw')
        console.dir(this.state)
    }
}

export default PwGenForm
