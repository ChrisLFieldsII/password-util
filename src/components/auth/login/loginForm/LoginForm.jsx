import React, { Component } from 'react'
import './LoginForm.scss'

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pw: '',
        }

        this.login = this.login.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.inputChange} required autoFocus placeholder="Enter email." />
                    </div>

                    <div className="row">
                        <label>Password:</label>
                        <input type="password" name="pw" value={this.state.pw} onChange={this.inputChange} required placeholder="Enter password." />
                    </div>

                    <div className="btns">
                        <button type="button" className="prim-btn" onClick={this.login}>Login</button>
                    </div>
                </form>
            </div>
        )
    }

    login() {
        console.log('clicked login');
        console.dir(this.state)
    }

    inputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({[name]:value})
    }
}

export default LoginForm
