import axios from "axios";
import React, { Component } from "react";
import './Get.css'


class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8091/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
        <th>user_id</th>
          <th>Name</th>
          <th>phonenum</th>
          <th>Age</th>
          <th>bus_id</th>
          <th>bus_name</th>
          <th>amount</th>
          <th>depature</th>
          <th>arrival</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.user_id}>
            <td>{user.user_id}</td>
            <td>{user.name}</td>
            <td>{user.phonenum}</td>
            <td>{user.age}</td>
            <td>{user.bus_id}</td>
            <td>{user.bus_name}</td>
            <td>{user.amount}</td>
            <td>{user.depature}</td>
            <td>{user.arrival}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Get;