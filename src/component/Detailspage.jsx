import React, { Component } from 'react';
//import './Signup.css';
import axios from 'axios'

class Detailspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        phonenum:'',
        age: '',
        bus_id: '',
        bus_name:'',
        amount:'',
        depature:'',
        arrival:''
    };
  }

  handlenameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlephonenumChange = (event) => {
    this.setState({ phonenum: event.target.value });
  };

  handleageChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handlebus_idChange = (event) => {
    this.setState({ bus_id: event.target.value });
  };

  handlebus_nameChange = (event) => {
    this.setState({ bus_name: event.target.value });
  };
  handleamountChange = (event) => {
    this.setState({ amount: event.target.value });
  };
  handledepatureChange = (event) => {
    this.setState({ depature: event.target.value });
  };
  handlearrivalChange = (event) => {
    this.setState({ arrival: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: this.state.name,
        phonenum: this.state.phonenum,
        age: this.state.age,
        bus_id: this.state.bus_id,
        bus_name: this.state.bus_name,
        amount: this.state.amount,
        depature: this.state.depature,
        arrival: this.state.arrival,
      };
    
      axios.post('http://localhost:8091/POST', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handlenameChange}
        />

        <label className="sign-label">Phonenum</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.phonenum}
          onChange={this.handlephonenumChange}
        />

        <label className="sign-label">Age</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.age}
          onChange={this.handleageChange}
        />
        <label className="login-label">Bus_id</label>
        <input
          className="login-input"
          type="number"
          value={this.state.bus_id}
          onChange={this.handlebus_idChange}
        />

        <label className="sign-label">Bus_name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bus_name}
          onChange={this.handlebus_nameChange}
        />

        <label className="sign-label">Amount</label>
        <input
          className="sign-input"
          type="number"
          value={this.state.amount}
          onChange={this.handleamountChange}
        />
        
        <label className="sign-label">Depature</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.depature}
          onChange={this.handledepatureChange}
        />

        <label className="sign-label">Arrival</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.arrival}
          onChange={this.handlearrivalChange}
        />
        <button className="login-button" type="submit">OK SUBMIT</button>
      </form>
    );
  }
}

export default Detailspage;