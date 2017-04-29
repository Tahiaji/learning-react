import React, { Component } from 'react';
import UserItem from './components/UserItem/UserItem';
import './users.css';

const numberOfUsers = 15;


class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            openId: 0,
        };

        this.onPlus = this.plus.bind(this);
        this.onMinus = this.minus.bind(this);
    }
    
    getUsers() {
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}&seed=1`, {
      method: 'GET',
    }).then(response => {
      return response.json();      
    }).then(data => {
      this.setState({
        users: data.results      
      });
    }).catch((error) => {
      console.log(error);
    })
  }
      componentWillMount() {
    this.getUsers();
  }

    plus(id) {
        console.log('plus');
        this.setState({openId: id});
    }
    minus() {
        console.log('minus');
        this.setState({openId: null});
    }

    render() {
         const {users} = this.state;

    if (users) {
        return (
                <div className="search">
                    <header className="search-header"></header>
                    <div className="results">
                        <h2>Users</h2>
                        
                
                         {
                        users.map((item, idx) => (
                                <div  key={idx}>
                                    <UserItem                               
                                        user={item} 
                                        isOpen={this.state.openId == idx}    
                                    />  
                                    {
                                    this.state.openId == idx?
                                    <button  onClick={this.onMinus}>Minus</button>
                                    : <button  onClick={()=>this.onPlus(idx)}>Plus</button>
                                    }                                    
                                </div>
                              ))
                          }   
                
                
                         <div>
                            
                        </div>
                
                
                    </div>
                </div>
                );
    }
}
}

export default Users;
    