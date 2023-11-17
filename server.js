const UserManagement = () => {
  const [addUserForm, setAddUserForm] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [checkUserForm, setCheckUserForm] = useState({
    checkUsername: '',
    checkPassword: '',
  });

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission for adding a user
    console.log('Adding user:', addUserForm);
  };

  const handleCheckUserSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission for checking a user
    console.log('Checking user:', checkUserForm);
  };

  const handleAddUserChange = (e) => {
    setAddUserForm({
      ...addUserForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckUserChange = (e) => {
    setCheckUserForm({
      ...checkUserForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleAddUserSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={addUserForm.username}
          onChange={handleAddUserChange}
          required
        /><br />

        <label htmlFor="password">Password (hashed):</label>
        <input
          type="password"
          id="password"
          name="password"
          value={addUserForm.password}
          onChange={handleAddUserChange}
          required
        /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={addUserForm.email}
          onChange={handleAddUserChange}
          required
        /><br />

        <button type="submit">Add User</button>
      </form>

      <h1>Check User</h1>
      <form onSubmit={handleCheckUserSubmit}>
        <label htmlFor="checkUsername">Username:</label>
        <input
          type="text"
          id="checkUsername"
          name="checkUsername"
          value={checkUserForm.checkUsername}
          onChange={handleCheckUserChange}
          required
        /><br />

        <label htmlFor="checkPassword">Password (hashed):</label>
        <input
          type="password"
          id="checkPassword"
          name="checkPassword"
          value={checkUserForm.checkPassword}
          onChange={handleCheckUserChange}
          required
        /><br />

        <button type="submit">Check User</button>
      </form>
    </div>
  );
};

export default UserManagement;

