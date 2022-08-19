import React, { Component, createRef } from "react";
import { Form, FormGroup, Label } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.fullName = createRef();
    this.email = createRef();
    this.phone = createRef();
    this.message = createRef();
    this.contactPref = createRef();
    this.accept = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log(this.fullName.current.value);
    console.log(this.email.current.value);
    console.log(this.phone.current.value);
    console.log(this.message.current.value);
    console.log(this.contactPref.current.value);
    console.log(this.accept.current.checked);
    event.preventDefault();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mb-4">
            <h2 className="text-center">Send us Feedback</h2>
          </div>
          <div className="col-4 m-auto">
            <Form>
              <FormGroup row className="mb-2">
                <Label className="form-label">Full Name</Label>

                <input type="text" ref={this.fullName} />
              </FormGroup>
              <FormGroup row className="mb-2">
                <Label className="form-label" for="email">
                  Email
                </Label>

                <input type="email" ref={this.email} />
              </FormGroup>
              <FormGroup row className="mb-2">
                <Label className="form-label" for="phone">
                  Phone Number
                </Label>

                <input type="text" ref={this.phone} />
              </FormGroup>
              <FormGroup row className="mb-2">
                <Label className="form-label" for="message">
                  Message
                </Label>

                <input type="textarea" ref={this.message} />
              </FormGroup>
              <FormGroup>
                <Label className="form-label">Contact Preference </Label>
                <select ref={this.contactPref}>
                  <option>Email</option>
                  <option>Phone</option>
                </select>
              </FormGroup>
              <FormGroup>
                <input type="checkbox" value="accept" ref={this.accept} />

                <Label className="form-label">
                  I know the rules and regulation
                </Label>
              </FormGroup>

              <input
                className="btn btn-primary"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
