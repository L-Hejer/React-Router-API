import React, { useState, useEffect } from 'react';

import UserCard from '../UserCard/UserCard';

const Home = () => {
  const [users, setUsers] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        //setIsLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: '0 20px',
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;
