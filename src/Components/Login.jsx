import React from 'react';

const Login = () => {
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');

      const login = () => {
            console.log(email);
            console.log(password);
      };
      return (
            <form>
                  <label>Email</label>
                  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                  <label>password</label>
                  <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
                  <button onClick={login} type="button">
                        Submit
                  </button>
            </form>
      );
};

export default Login;
