import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';


import './layout.css'

    function mapStateToProps(state, ownProps) {
      return {
        data: state.data
      };
    }

class Layout extends Component {
  render() {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className="content">
                {this.props.children}
            </div>
            <Footer/>
        </div>
        );
  }
}

export default connect(mapStateToProps)(Layout);
