import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <Link className="profile-link" to={`/profile/${user.id}`}>
            <span className="avatar-letter">{user.name[0]}</span>
            {/*   <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
              alt="Username"
            /> */}
          </Link>
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {user.name}
              <span className="badge">PRO</span>
            </span>
            <span className="username">@{user.username}</span>
          </div>
          <div className="student-infos">
            <div className="Student-description">
              <p>{user.email}</p>
              <p>
                {user.company.name}, {user.company.catchPhrase}
              </p>
            </div>

            <ul className="student-links">
              <li>
                <a href="https://github.com/">
                  <img
                    src="https://img.icons8.com/material-sharp/25/000000/github.png"
                    alt="github"
                  />
                </a>
              </li>
              <li>
                <a href="https://behance.com/">
                  <img
                    src="https://img.icons8.com/windows/25/000000/behance.png"
                    alt="behance"
                  />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/">
                  <img
                    src="https://img.icons8.com/windows/25/000000/dribbble.png"
                    alt="dribbble"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
