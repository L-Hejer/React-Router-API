import React, { useEffect, useState } from 'react';

const Profile = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const url =
      'https://jsonplaceholder.typicode.com/users/?id=' + props.match.params.id;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
  });
  return (
    <div className="profile">
      <span className="Student-name">{user.name}</span>
      <span className="username" style={{ color: 'white' }}>
        @{user.username}
      </span>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default Profile;
