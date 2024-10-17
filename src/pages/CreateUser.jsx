import React, { useState } from "react";
import '../styles/CreateUser.css';

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Limpiar los campos después de enviar
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="create-user-main">
      <div className="form-container">
        <h2>Create User</h2>
        <form className="form-create-user" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </label>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="img">
        <img src="moonlanding-hotel-logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default CreateUser;



/* import React, { useState } from "react";
import '../styles/CreateUser.css';

const CreateUser = () => {
  // Definir estados para los campos de entrada del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    //recorda cambiar esto cuando pases al back
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="create-user-main">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateUser;
 */