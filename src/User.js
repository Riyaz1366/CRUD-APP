import React, { useState } from "react";

import './Style.css'

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [dob, setDob] = useState("");
 const [gender, setGender] = useState("");
 const [selectedUser, setSelectedUser] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { name, email, dob, gender };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
    
      const newUser = { name, email, dob, gender };
      setUsers([...users, newUser]);
    }
    setName("");
    setEmail("");
    setDob("");
    setGender("other");
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email)
    setDob(userToEdit.dob);
    setGender(userToEdit.gender);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div >
      

      <h1>User Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Date of Birth:</label>
<input
  type="date"
  placeholder="Date of Birth"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
/>
<label>Gender:</label>
<select value={gender} onChange={(e) => setGender(e.target.value)}>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

        <button type="submit" className="submit-button">
          {editIndex !== null ? "Update" : "Create"}
        </button>
      </form>

      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
  <li key={index}>
    <div>
      <strong>Name:</strong> {user.name}
    </div>
    <div>
      <strong>Email:</strong> {user.email}
    </div>
    <div>
      <strong>Date of Birth:</strong> {user.dob}
    </div>
    <div>
      <strong>Gender:</strong> {user.gender}
    </div>
    <div className="button-container">
      <button className="edit-button" onClick={() => handleEdit(index)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => handleDelete(index)}>
        Delete
      </button>
      <button className="read-button" onClick={() => setSelectedUser(index)}>
        Read
      </button>
    </div>
  </li>
))}        </ul>
      )}
    </div>
  );
}

export default UserDetails;
