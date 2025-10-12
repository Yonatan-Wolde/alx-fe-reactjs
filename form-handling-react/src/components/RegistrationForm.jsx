import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Registered:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}             
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}                
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}             
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}


export default RegistrationForm