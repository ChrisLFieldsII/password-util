import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from "react-apollo"; // not using compose...
import { withRouter } from "react-router-dom"; // allows access to router obj props
import { connect } from "react-redux";
import { userLoggedIn } from "../../../../redux/actions";
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
        const { email, password } = this.state
        const data = await this.props.loginMutation({
            variables: { email, password }
        })
        console.log('Returned LOGIN_MUTATION data:',data)
        const user = data.data.login.user
        const token = data.data.login.token
        localStorage.setItem('token', token)
        this.props.history.push('/pwGen') //redirect
        // dispatch to redux store
        this.props.dispatchLogin(user, token)
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogin: (user, token) => dispatch(userLoggedIn(user, token))
    }
}

export default graphql(LOGIN_MUTATION, {name:'loginMutation'})(connect(null, mapDispatchToProps)(withRouter(LoginForm)))
