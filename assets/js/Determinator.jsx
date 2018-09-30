import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'reactstrap';

export default function run(root) {
  ReactDOM.render(<Determinator/>, root);
}

class Determinator extends React.Component {
  render() {
    return (
      <Fragment>
        <div id='header'>
          <Row>
            <Col md='2'></Col>
            <Col md='8' className='fade-in' id='brand'>
              <h1>THE DETERMINATOR</h1>
            </Col>
            <Col md='2'></Col>
          </Row>
          <Row>
            <Col md='8'></Col>
            <Col md='2' id='sub-text'>
              <p>(yes, it's a word.)</p>
            </Col>
            <Col md='2'></Col>
          </Row>
          <Row id='account-links'>
            <Col md='5' className='fade-in' id='login-btn'>
              <Button>LOGIN</Button>
            </Col>
            <Col md='2' className='fade-in' id='gavel'>
              <i className='fas fa-gavel'></i>
            </Col>
            <Col md='5' className='fade-in' id='register-btn'>
              <Button>REGISTER</Button>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}