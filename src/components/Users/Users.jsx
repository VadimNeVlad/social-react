import React from "react";
import axios from "axios";
import userImg from "../../assets/img/user.png";

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      props.setUsers(response.data);
    });
  }
  return (
    <div className="content users content-box">
      <h2>Users</h2>
      {props.users.map((users) => {
        return (
          <div className="users__list" key={users.id}>
            <div className="users__item">
              <div className="users__panel">
                <div className="users__img">
                  <img src={userImg} alt="foto" />
                </div>
                {users.followed ? (
                  <button
                    className="users__btn"
                    onClick={() => props.unfollow(users.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className="users__btn"
                    onClick={() => props.follow(users.id)}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className="users__text-wrap">
                <div className="users__info-content">
                  <h4>{users.name}</h4>
                  <div className="users__geos">
                    <h5>Country</h5>
                    <h6>City</h6>
                  </div>
                </div>
                <p>Status about</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
