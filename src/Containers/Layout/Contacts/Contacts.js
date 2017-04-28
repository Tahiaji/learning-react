import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import UserItem from './components/UserItem/UserItem';
const numberOfUsers = 6;

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      page: 1,
      loading: true
    };
    
    this.onNext = this.next.bind(this);
    this.onPrev = this.prev.bind(this);
  }

sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
} 

  getUsers() {
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}&seed=1&page=${this.state.page}`, {
      method: 'GET',
    }).then(response => {
      return response.json();      
    }).then(data => {
       this.sleep(1000);
      this.setState({
        users: data.results,  
        loading: false
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillMount() {
    this.getUsers();
  }

  handleClick(event) {
    const {id} = event.target;
    console.log(id);
  }



  next(event) {
    console.log('next');    
    this.setState({loading: true},()=>{
          this.setState({page: this.state.page + 1}, () => {
      console.log('Container setState callback');
      this.getUsers();
    });
    })
    
    

  }

  prev(event) {
    console.log('prev');
    if (this.state.page > 1) {
      this.setState({page: this.state.page - 1}, () => {
        console.log('Container setState callback');
        this.getUsers();
      });
    }
  }

  getCls() {
    return classNames({
      'user-item-wrap': true,
      'active-user': this.state.active,
    });
  }

  render() {
    const {users} = this.state;

    if (users) {
      return (
          <div>        
              {
            users.map((item, idx) => (
                            <UserItem
                                key={idx}
                                user={item}                                                 
                                />
                  ))
              }          
              <button  disabled={this.state.loading}  onClick={this.onPrev}>Prev</button>
              <button disabled>
              {this.state.loading?
                <span><i className="fa fa-spinner fa-spin"></i></span>:
                <span>{this.state.page}</span>                
               }
              </button>              
              <button  disabled={this.state.loading} onClick={this.onNext}>Next</button>
          </div>
          );
    }
    return;
  }
}

export default Contacts;