import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure FirebaseUI.
const uiConfig = {
      callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  console.log(authResult);
                  return false;
            },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/login1',
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

const Login1 = () => {
      return (
            <div>
                  <h1>My App</h1>
                  <p>Please sign-in:</p>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
      );
};

export default Login1;
