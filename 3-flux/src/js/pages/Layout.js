import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import * as TodoActions from "../actions/TodoActions";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  };

  handleChange = e => {
    console.log('1:', e.target.value);
    this.setState({ input: e.target.value });
  }

  updateState = () => {
    console.log('---->', this.state.input)
    TodoActions.createTodo(this.state.input);
  }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>

          <div class="row m-5">
              <div class="col-lg-2"><input onChange={this.handleChange}></input></div>
              <div class="col-lg-2"><button onClick={this.updateState}>Click Me!</button></div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
