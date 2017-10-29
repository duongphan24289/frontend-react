import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import MasterLayout from '../../components/Layouts/Master/MasterLayout';
import FormLogin from '../../components/Login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login() {
    console.log('login action');
  }

  render() {
    return (
      <MasterLayout>
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <FormLogin />
            </Col>
          </Row>
        </Grid>
      </MasterLayout>
    );
  }
}

export default connect()(Login);