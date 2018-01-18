import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from "react-apollo"; // not using compose...
import { withRouter } from "react-router-dom"; // allows access to router obj props
import './LoginForm.scss'

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
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
                        <input type="email" name="email" value={this.state.email} onChange={this.inputChange} required autoFocus autoComplete="on" placeholder="Enter email." />
                    </div>

                    <div className="row">
                        <label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.inputChange} required autoComplete="on" placeholder="Enter password." />
                    </div>

                    <div className="btns">
                        <button type="button" className="prim-btn" onClick={this.login}>Login</button>
                    </div>
                </form>
            </div>
        )
    }

    async login() {
        console.log('clicked login')
        console.dir(this.state)
        const { email, password } = this.state
        const data = await this.props.loginMutation({
            variables: { email, password }
        })
        console.log('Returned LOGIN_MUTATION data:',data)
        const token = data.data.login.token
        localStorage.setItem('token', token)
        this.props.history.push('/pwGen') //redirect
    }

    inputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({[name]:value})
    }
}

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email:String!, $password:String!) {
        login(email:$email, password:$password) {
            token
            user {
                id
                name
                email
            }
        }
    }
`

export default graphql(LOGIN_MUTATION, {name:'loginMutation'})(withRouter(LoginForm))
