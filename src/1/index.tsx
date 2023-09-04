// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit} className="form-container">
        <label className="email-label">Email</label>
        <input
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
          placeholder="Email"
          className="input-field"
        />
        <label className="password-label">Password</label>
        <input
          name="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
          className="input-field"
          placeholder="Password"
        />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Task1;
