import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import {Provider} from "react-redux";
import store from "../store";

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import Header from "./layouts/header.jsx";
import Dashboard from "./leads/dashboard.jsx";
import Alerts from "./layouts/Alerts.jsx";


//alert options
const alertOption = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOption}>
                    <Fragment>
                        <Alerts/>
                        <Header/>
                        <Dashboard/>
                    </Fragment>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));