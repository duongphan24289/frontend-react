import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default connect()(App);