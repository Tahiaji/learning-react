import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

import './user-item.css';

const UserItem = (props) => {
    
  const {user,isOpen} = props;
  console.log(user);
  
 
  
  /**
   * return {string}
   */
  const handleHeader = () => {
    const {user: {name: {first, last},login: {username},location:{state}, picture: {thumbnail},cell}} = props;
    return `<img src=${thumbnail}> ${first}  ${last}  ${username} ${cell} ${state}`;
  }
  
   const header = handleHeader();
  
  
  return (
          
            <Panel collapsible expanded={isOpen} header={header}>
                        <h2>{user.name.first}  <span>{user.gender}</span></h2>               
                        <table>
                            <tr>
                                <td><b>Username:</b><span> {user.login.username}</span></td>
                                <td><b>Address:</b><span> {user.location.street}</span></td>
                                <td><b>Birthday:</b><span> {user.dob}</span></td>
                                <td rowspan="3"><img src={user.picture.large}/></td>
                            </tr>  
                            <tr>
                                <td><b>Registered:</b><span> {user.registered}</span></td>
                                <td><b>City:</b><span> {user.location.city}</span></td>
                                <td><b>Phone:</b><span> {user.email.phone}</span></td>
                            </tr> 
                            <tr>
                                <td><b>Email:</b> <span> {user.email}</span></td>
                                <td><b>Zip Code:</b><span> {user.location.postcode}</span></td>
                                <td><b>Cell:</b><span> {user.cell}</span></td>
                            </tr> 
                        </table>
           </Panel>        
        
    
      );
}

export default UserItem;
