import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import alertify from "alertifyjs";

export default class formDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" }
  handlechange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + "  added to DB!");
    
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter e-mail"
              onChange={this.handlechange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handlechange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Adress:</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handlechange}
            />
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label>
                <Input type="select" 
                name="city" 
                id="city" 
                onChange={this.handlechange}>
                    <option>Ankara</option>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Adana</option>
                    <option>Bursa</option>
                    <option>Antalya</option>
                    </Input>
            </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
