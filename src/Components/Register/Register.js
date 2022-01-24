import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Registration } from '../../actions/user';
import { Container, Col, Row } from 'react-bootstrap';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleSubmit = () => {
    alert("success")
    this.props.registration(this.state)
  }
  changeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    return (
      <div className="images">
        <Container>
        <Row>
            <Col>
            <h2>CHRISTIE MARKET</h2>
            <p>VOUS N'AVEZ PAS DE COMPTE ?  Faites-vous enregistrer ici</p>
            </Col>
          </Row>
          <Row>
  
            <Col>
              <div className="Av-Forme">
                <marquee behavior="alternate">
                  CREATE YOUR ACCOUNT
                </marquee>
                <AvForm onValidSubmit={this.handleSubmit} ref={c => (this.form = c)}>
                  {/* With AvField */}
                  <AvField name="name" label="Name" required onChange={this.changeHandler} />
                  <AvField name="email" label="Email" required onChange={this.changeHandler} />
                  <AvField name="phone" label="Phone" required onChange={this.changeHandler} />
                  <AvField name="password" label="Password" required onChange={this.changeHandler} />
                  <FormGroup>
                    <Button type="submit">Submit</Button>
                  </FormGroup>
                </AvForm>
              </div>

            </Col>

          </Row>
         
        </Container>

      </div>

    );

  }
}
const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => bindActionCreators({
  registration: Registration
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)