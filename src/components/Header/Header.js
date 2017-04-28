import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.css';

export default class Header extends Component {
  render() {
    return (
        <header className="mainheader">
            <h1>Lorem ipsum</h1>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>                
        </header>
        );
  }
}