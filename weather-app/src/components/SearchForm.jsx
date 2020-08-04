import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap'

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: " " };
  }

  _handleInput=(event) =>{
    this.setState({ query: event.target.value });
  }
  _handleSubmit=(event)=>{
    event.preventDefault();
     // The child component communicates its data (query) back to the parent
    // via this onSubmit callback.
    this.props.onSubmit(this.state.query)
  }
    
        render() {
            return (
              <form className="search-box" onSubmit={this._handleSubmit}>
                <Form.Control  className="search-bar" type="search" onInput={this._handleInput} required placeholder="Sydney" />
                <Button className='button' variant="primary" type="submit">Search</Button>
              </form>
            );
          }
    }
export default SearchForm;
