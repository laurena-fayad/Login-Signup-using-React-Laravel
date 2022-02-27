import React from 'react';

const Login = () => {
  return (
    <main className="form-signin">
      <form>
          <h1 className="h3 mb-3 fw-normal">Log In</h1>
          <input type="name" class="form-control" placeholder="Full Name" required/>
          <input type="email" class="form-control" placeholder="Email Address" required/>
          <input type="password" class="form-control" placeholder="Password" required/>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
      </form>
    </main>
  );
};

export default Login;