import React from 'react';
import { connect } from 'react-redux';
import {
  FormControl,
  FormGroup,
  Row,
  Col,
  ControlLabel,
  Form
} from 'react-bootstrap';
import LoadingPage from '../../components/LoadingPage';
import LaddaButton, { XL, EXPAND_LEFTX } from 'react-ladda';
import auth from '../../apis/auth';
import PropTypes from 'prop-types';

class FormLogin extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(data)
      .then(() => {
        this.context.router.push('/dashboard');
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className="login-form">
        <LoadingPage />
        <FormGroup>
          <ControlLabel><span className="required">Email</span></ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Enter email." />
        </FormGroup>
        <FormGroup>
          <ControlLabel><span className="required">Password</span></ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6} xs={6} />
          </Row>
        </FormGroup>
        <LaddaButton
          className="btn-login"
          data-color="#eee"
          data-size={XL}
          data-style={EXPAND_LEFTX}
          data-spinner-size={30}
          data-spinner-color="#ddd"
          data-spinner-lines={12}>Login</LaddaButton>
      </Form>
    );
  }
}
FormLogin.propTypes = {
  login: PropTypes.func.isRequired
};

FormLogin.contextTypes = {
  router: PropTypes.object.isRequired
};

// function mapStateToProps(state) {}

function mapDispatchToProps() {
  return {
    login: (data) => auth.actions.login.request({}, { data })
  };
}

export default connect(null, mapDispatchToProps)(FormLogin);