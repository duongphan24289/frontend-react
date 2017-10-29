import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Partials/Header';
import SideBar from '../Partials/SideBar';
import Footer from '../Partials/Footer';

export default class MasterLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <main className="main-controller">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

MasterLayout.propTypes = {
  children: PropTypes.node
};