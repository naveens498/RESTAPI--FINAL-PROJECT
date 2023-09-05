import axios from 'axios';
import React, { Component } from 'react'
//import ShowUser from './UserGetById';
import Update from './Update';
import './Delete.css'

export default class YourBookings extends Component {
    state={
        data:[],
        showHotel: false,
        id: '',
        formDat:[],
        editData: false,
    }

    
    componentDidMount()
    {
      axios.get('http://localhost:8091/get')
      .then(response => {
          this.setState({data: response.data});
      })

      .catch(error =>{
          console.log(error);
      });
    }

    hotelShow=(e,user_id)=>
    {
        e.preventDefault();

        this.setState({showHotel: true , id:user_id})
    }

    deleteBooking = (e, user_id) => {
        e.preventDefault();
      
        axios
          .delete(`http://localhost:8091/deletebyuserid/${user_id}`)
          .then((response) => {
            // Check if the response data is an array (or whatever structure you expect)
            if (Array.isArray(response.data)) {
              // Update the state with the updated data received from the server
              this.setState({ data: response.data });
              // Show an alert message to inform the user
            } else {
              // Handle unexpected response here (e.g., log an error)
              console.error('Unexpected response data:', response.data);
            }
            alert(`The booking ID: ${user_id} has been cancelled! Kindly refresh the page.`);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
      updateBooking= (e,user_id)=>{
        e.preventDefault();

        this.setState({editData: true , id:user_id})
      }
       
  render() {
    return (
      <div>
      <h1 id='booking'>Booking Records:</h1>
      <div id='finalbox'>
      <table>
      <tbody>
      {
        this.state.data.map(book=>(
            <tr key={book.user_id}>
            <td>
             
            <div id='box4'>
            <h3 id="bid"   class="fir">user_id: {book.user_id}</h3>
            <h3 id='bid' class='fir'>name: {book.name}</h3>
            <h3 id='bid' class='fir'>phonenum: {book.phonenum}</h3>
            <h3 id="bid"  class="fir">age: {book.age}</h3>
            <h3 id="bid"  class="fir">bus_id: {book.bus_id}</h3>
            <h4 id="bid" class="fir">bus_name :{book.bus_name}</h4>
            <h4 id="bid"  class="fir">amount: {book.amount}</h4>
            <h4 id="bid" class="fir">arrival: {book.arrival}</h4>
            <h4 id="bid"  class="fir">depature: {book.depature}</h4>
            <button id='but2' class="butts" onClick={(e)=>{this.deleteBooking(e,book.user_id)}}>Cancel Booking!</button>
            <button id='but3' class="butts" onClick={(e)=>{this.updateBooking(e,book.user_id)}}>Update Details</button>
            </div>
            </td>
            </tr>
        ))
      }
      </tbody>
      {this.state.editData && <Update id={this.state.id}/>}
      </table>
      </div>
      </div>
    )
  }
}