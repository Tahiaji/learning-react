
import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Sidebar extends Component {
    render() {
        return (
                <div className="panel">
                    <h4>Menu</h4>
                    <ul>
                        <li><Link to='/'  activeClassName='active'>Home</Link></li>
                        <li><Link to='/about'  activeClassName='active'>About</Link></li>
                        <li><Link to='/contacts'  activeClassName='active'>Contacts</Link></li>
                    </ul>                       
                </div>

                );
    }
}