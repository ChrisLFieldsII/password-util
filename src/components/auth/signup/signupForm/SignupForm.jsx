import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from "react-apollo";
import './SignupForm.scss'

class SignupForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            pw1: '',
            pw2: '',
        }

        this.inputChange = this.inputChange.bind(this)
        this.submit = this.submit.bind(this)
    }


    render() {
        return (
            <div>
                <form id="form">
                    <div className="row">
                        <label>Name:</label>
                        <input type="text" value={this.state.name} name="name" onChange={this.inputChange} required autoFocus autoComplete="on" placeholder="Enter name." />
                    </div>

                    <div className="row">
                        <label>Email:</label>
                        <input type="email" value={this.state.email} name="email" onChange={this.inputChange} required autoComplete="on" placeholder="Enter email." />
                    </div>

                    <div className="row">
                        <label>Password:</label>
                        <input type="password" value={this.state.pw1} name="pw1" onChange={this.inputChange} required autoComplete="on" placeholder="Enter password."  />
                    </div>

                    <div className="row">
                        <label>Re-enter Password:</label>
                        <input type="password" value={this.state.pw2} name="pw2" onChange={this.inputChange} required autoComplete="on" placeholder="Re-enter password."  />
                    </div>

                    <div className="btns">
                        <button type="button" className="prim-btn" onClick={this.submit}>Signup</button>
                    </div>
                </form>
            </div>
        )
    }

    inputChange(event) {
        const target = event.target // target of event is input
        const value = target.value
        const name = target.name

        this.setState({[name]:value}) // [name] is ES6 computed property name syntax (the prop happens to be called name in this case!)
    }

    async submit() {
        console.log('clicked submit')
        console.dir(this.state)
        const { name, email, pw1, pw2 } = this.state
        if (pw1 === pw2) {
            const password = pw1
            const data = await this.props.createUserMutation({
                variables: { name, email, password }
            })
            console.log('Returned CREATE_USER_MUTATION data:',data)
        }
        else {
            console.log('passwords didnt match')
        }
    }
}

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation($name:String!, $email:String!, $password:String!) {
        createUser(name:$name, email:$email, password:$password) {
            id
            name
            email
        }
    }
`

export default graphql(CREATE_USER_MUTATION, {name:'createUserMutation'})(SignupForm)
