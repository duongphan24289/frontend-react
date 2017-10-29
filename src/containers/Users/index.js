import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
  render() {
    return (
      <div>
            Manager Users Page
      </div>
    );
  }
}

export default connect()(Users);