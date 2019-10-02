import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Components/Login';
import Login1 from './Components/Login1';
import app from './Firebase/Authentication/Auth';
import { test } from './Reducers/auth';

const Home = () => <h1>Home</h1>;

function App(props) {
      React.useEffect(() => {
            props.test1();
            app.auth().onAuthStateChanged(function(user) {
                  if (user) {
                        console.log(user);
                  } else {
                        console.log(123);
                  }
            });
      }, [props]);
      return (
            <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/login1" component={Login1} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/login" />
            </Switch>
      );
}

const mapDispatchToProps = (dispatch) => ({
      test1: () => dispatch(test()),
});

export default connect(
      null,
      mapDispatchToProps,
)(App);
