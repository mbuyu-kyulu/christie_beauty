import "./Login.css";
import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoginForm } from '../../actions/user';
import { withRouter } from "react-router";
import { Container, Row, Col } from "react-bootstrap";



class Login extends React.Component {
  constructor(props) {
    super(props)

  }
  handleSubmit = () => {
    // alert("success")
    this.props.loginform(this.state)

  }
  changeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/dashboard")
      // location.href="http://localhost:3000/dashboard"
    }
    console.log(this.props)
    return (
      <div className="bgimg">
        <Container>
          <Row>
            <Col>
              <div className="Av-Form">
                <h3>SIGN IN</h3>
                <br></br>
                <AvForm onValidSubmit={this.handleSubmit} ref={c => (this.form = c)}>
                  {/* With AvField */}
                  <AvField name="email" label="Email" required onChange={this.changeHandler} />
                  <AvField name="password" label="Password" required onChange={this.changeHandler} />
                  <FormGroup className="Button">
                    <Button type="submit">Submit</Button>
                  </FormGroup>
                </AvForm>
              </div>
            </Col>

          </Row>
        </Container>


      </div>

    )
  }
}
const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loginform: LoginForm
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))