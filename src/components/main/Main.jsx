import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AuthContainer from '../auth/auth-container/AuthContainer'
import PwGenerator from '../pwGen/PwGenerator'
import PwVault from '../pwVault/PwVault'
import './Main.scss'

class Main extends Component {
    render() {
        return (
            <main id="main">
                <Switch>
                    <Route exact path="/auth" component={AuthContainer} />
                    <Route exact path="/pwGen" component={PwGenerator} />
                    <Route exact path="/pwVault" component={PwVault} />
                </Switch>
            </main>
        );
    }
}

export default Main;
