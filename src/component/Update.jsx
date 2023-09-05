import axios from 'axios';
import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id:'',
          name: '',       
          age: '',
          phonenum: '',
          bus_id: '',
          bus_name: '',
          amount: '',
          arrival: '',
          depature:'',
        };
      }
      

      componentDidMount() {
        const { id } = this.props;
      alert(`The id : ${id}`)
        axios
          .get(`http://localhost:8091/getbyid/${id}`)
          .then((response) => {
            const {user_id, name, age, phonenum, bus_id, bus_name, amount, arrival, depature} = response.data;
            this.setState({
              user_id,
              name,
              age,
              phonenum,
              bus_id,
              bus_name,
              amount,
              arrival,
              depature,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      


    handleSubmit= (e)=>{
        e.preventDefault();
        
        const formData={
            user_id:this.state.user_id,
            name: this.state.name,
            age: this.state.age,
            phonenum: this.state.phonenum,
            amount: this.state.amount,
            bus_id: this.state.bus_id,
            bus_name: this.state.bus_name,
            depature: this.state.depature,
            arrival: this.state.arrival,
        };
        
      axios.put(`http://localhost:8091/customerup`,formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      alert("Sucessfullyupdated")
  };

  render() {
    return (
      <div id='box5'>
      <form id="text1" onSubmit={this.handleSubmit}>
        <br/>
        <label>name</label>
        <input type="text" id="uname" class="field1" value={this.state.name} readOnly/>
        <br/><br/>

        <label>age</label>
        <input type="number" id="age" class="field1" value={this.state.age} readOnly/>
        <br/><br/>

        <label>amount</label>
        <input type="number" id="num" class="field1" value={this.state.amount} readOnly/>
        <br/><br/>

        <label>bus_id</label>
        <input type="number" id="num" class="field1" value={this.state.bus_id} onChange={(e)=>{this.setState({bus_id:e.target.value})}}/>
        <br/><br/>

        <label>bus_name</label>
        <input type="text" id="num" class="field1" value={this.state.bus_name} onChange={(e)=>{this.setState({bus_name:e.target.value})}} />
        <br/><br/>

        <label>arrival</label>
        <input type="text" id="num" class="field1" value={this.state.arrival} onChange={(e)=>{this.setState({arrival:e.target.value})}} />
        <br/><br/>

        <label>depature</label>
        <input type="text" id="num" class="field1" value={this.state.depature} readOnly/>
        <br/><br/>
        <button type="submit" id="reg">Submit!</button>
        </form>
      </div>
    )
  }
}