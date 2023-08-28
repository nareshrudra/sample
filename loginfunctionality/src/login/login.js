const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <label>User name</label>
      <br></br>
      <input type="text" placeholder="user name:"></input>
      <br></br>
      <label>Password</label>
      <br></br>
      <input type="text" placeholder="password"></input>
      <br></br>
      <button onClick={SubmitEvent}>Submit</button>
    </div>
  );
};

export default Login;
