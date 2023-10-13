import React, { useState } from 'react';
import axios from 'axios';
function UserIdSection() {
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState(null);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleRequest = async () => {
    try {
      // Make a request to the backend with userId as a path parameter
      const response = await axios.get(`http://localhost:9000/carteiras/users/${userId}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Section 2: User ID Lookup</h2>
      <label>
        User ID:
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      <button onClick={handleRequest}>Request</button>

      {result && result.length > 0 && (
        <div>
          <h3>Response:</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.user_id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result && result.length === 0 && <p>No results found.</p>}
    </div>
  );
}

export default UserIdSection;