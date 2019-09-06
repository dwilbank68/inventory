import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import LandingPage from './Landing.jsx';
import SignUpPage from './SignUp.jsx';
import SignInPage from './SignIn.jsx';
import PasswordForgetPage from './PasswordForget.jsx';
import HomePage from './Home.jsx';
import AccountPage from './Account.jsx';
import AdminPage from './Admin.jsx';
import { withFirebase } from './firebase/index.js';

import * as ROUTES from '../constants/routes.js';

class App extends Component {

    state = {
        authUser: null
    }


    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
            // const user = authUser || null;
            // this.setState({ authUser: user });
                this.setState({ authUser });
            }
        );
    }

    componentWillUnmount() {
        this.listener();
    }

    


    render() {
        return (
            <Router>
                <Navigation authUser={this.state.authUser}/>
                <hr />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
            </Router>
        );
    }

};

export default withFirebase(App);