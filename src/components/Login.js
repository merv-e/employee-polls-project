

const Login = (props) => {

    const handleLogin = event => {
        event.preventDefault();
        // navigate if username and password matches

        // props.users.id = 
    }

    const handleClick = (e) => {
        // e.target.value 
    }

  return (
    <div className="login-page">
      <img 
       src="../public/images/employee-poll.png" alt="Apicture showing employees"/>
      <form 
       className="login" 
       onSubmit={handleLogin} >
        <input placeholder="username" type="text"/>
        <input placeholder="password" type="text"/>
        <button type="submit" onClick={handleClick}>Login</button>
      </form>
    </div>
  )
  }

export default Login
