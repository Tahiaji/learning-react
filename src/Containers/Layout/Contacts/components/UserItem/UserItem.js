import React from 'react';

import './user-item.css';

const UserItem = (props) => {
  /**
   * return {string}
   */
  const handleName = () => {
    const {user: {name: {first, last}, picture: {thumbnail}}} = props;
    const userNameArr = [];

    if (first)
      userNameArr.push(first);
    if (last)
      userNameArr.push(last);
    return userNameArr.join(' ');
  }

  const {user} = props;
  return (
      <div className="user-container">
          <div className="card hovercard">
              <img src={`http://lorempixel.com/240/180/nature/${user.id.value}`} alt=""/>
              <div className="avatar">
                  <img src={user.picture.medium} alt="" />
              </div>
              <div className="info">
                  <div className="title">
                      {handleName() }
                  </div>
                  <div className="desc">{user.email}</div>
                  <div className="desc">{user.cell}</div>
              </div>
          </div>
      </div>
      );
}

export default UserItem;
