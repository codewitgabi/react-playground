import { useNavigate } from "react-router-dom";


function RegisterPage(props) {
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if ("username" in data && data.username.constructor.name === "Array") {
        document.getElementById("auth-error").textContent = data.username[0];
      } else if ("password" in data && data.password.constructor.name === "Array") {
        document.getElementById("auth-error").textContent = data.password[0];
      } else {
          navigate("/login");
      }
    })
    .catch(error => alert(error))

    e.target.reset();
  };

  return (
    <div className="form-wrapper">
      <legend className="title">Sign Up</legend>
      <p id="auth-error"></p>
      <form method="post" onSubmit={ handleRegister }>
        <p>Username<span>*</span></p>
        <input
          type="text"
          name="username"
          required="true"
          placeholder="Username"
        />
        <p>Email<span>*</span></p>
        <input
          type="email"
          name="email"
          required="true"
          placeholder="Email"
        />
        <p>Password<span>*</span></p>
        <input
          type="password"
          name="password"
          required="true"
          placeholder="Password"
        />
        <button className="auth-btn">Sign Up</button>
      </form>
    </div>
  );
}


export default RegisterPage;
