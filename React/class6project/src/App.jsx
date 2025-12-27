import React, { useState } from "react";
import "./index.css";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  
  const [users, setUsers] = useState([]); // 🔥 ARRAY

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    setUsers([...users, newUser]); // 🔥 purane + naya

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container">
      <h2>User Form</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>

      {/* 🔥 Multiple Cards */}
      <div className="card-wrapper">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
