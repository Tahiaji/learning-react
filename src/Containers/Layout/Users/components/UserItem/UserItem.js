import React from 'react';
import { Panel } from 'react-bootstrap';

import './user-item.css';

const UserItem = (props) => {
    
  const {user,isOpen,color} = props;
  
  /**
   * return {string}
   */
  const handleHeader = () => {
    const {user: {name: {first, last},login: {username},location:{state}, picture: {thumbnail},cell}} = props;    
    return  <div className="row">
              <div className="col-sm-1"><img  className="img-circle" src={thumbnail}/></div>
              <div className="col-sm-2">{first} {last}</div>             
              <div className="col-sm-3">{username}</div>
              <div className="col-sm-3">{cell}</div>              
              <div className="col-sm-2">{state}</div>
            </div>;

  }
  
  const header = handleHeader();

  return (
          
            <Panel collapsible expanded={isOpen} header={header} style={{backgroundColor: color}}>    
                 <div className="row user-detailed">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <h3>
                            <span>{user.name.first}</span>
                            <span>
                                {
                                    user.gender=='male'?
                                    <i className="fa fa-male" aria-hidden="true"></i>:
                                    <i className="fa fa-female" aria-hidden="true"></i>
                                }
                            </span>
                        </h3>
                    </div>                 
                 </div>
                 <div className="row user-detailed">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div className="short-div">
                        <span className="user-detailed-title">Username:</span>
                        <span className="user-detailed-content"> {user.login.username}</span>
                        </div>
                      <div className="short-div">
                        <span className="user-detailed-title">Registered:</span>
                        <span className="user-detailed-content"> {user.registered}</span>
                      </div>
                      <div className="short-div">
                        <span className="user-detailed-title">Email:</span> 
                        <span className="user-detailed-content"> {user.email}</span>
                      </div>                    
                    </div>                    
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div className="short-div">
                        <span className="user-detailed-title">Address:</span>
                        <span className="user-detailed-content"> {user.location.street}</span>
                      </div>
                      <div className="short-div">
                        <span className="user-detailed-title">City:</span>
                        <span className="user-detailed-content"> {user.location.city}</span>
                      </div>
                      <div className="short-div">
                        <span className="user-detailed-title">Zip Code:</span>
                        <span className="user-detailed-content"> {user.location.postcode}</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div className="short-div">
                        <span className="user-detailed-title">Birthday:</span>
                        <span className="user-detailed-content"> {user.dob}</span>
                      </div>
                      <div className="short-div">
                        <span className="user-detailed-title">Phone:</span>
                        <span className="user-detailed-content"> {user.phone}</span>
                      </div>
                      <div className="short-div">
                        <span className="user-detailed-title">Cell:</span>
                        <span className="user-detailed-content"> {user.cell}</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <img className="img-circle" src={user.picture.large}/>
                    </div>
              </div>
           </Panel>        
        
    
      );
}

export default UserItem;
