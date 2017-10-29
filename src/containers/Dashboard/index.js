import React from 'react';
import { connect } from 'react-redux';
import todo from '../../apis/todo';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.props.todo()
      .then((res) => {
        this.setState({ todos: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>List my todo</h1>
        <div>
          { this.state.todos.map((item) => <p key={item.id}>{item.text}</p>) }
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  todo: PropTypes.func.isRequired
};

function mapDispatchToProps() {
  return {
    todo: () => todo.actions.list.request()
  };
}

export default connect(null, mapDispatchToProps)(Dashboard);