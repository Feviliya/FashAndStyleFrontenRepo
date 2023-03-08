import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import './GetClient.css'
export class GetClients extends Component {
    state = {
        data: []
        }
      
        componentDidMount() {
        axios.get('http://127.0.0.1:8080/getPersonal')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }
  render() {
    return (
      <div id='client'>
        <Navbar></Navbar>
        <table id='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>username</th>
          <th>phone</th>
          <th>door no</th>
          <th>city</th>
          <th>district</th>
          <th>state</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.lastname}</td>
            <td>{user.phone}</td>
            <td>{user.doorno}</td>
            <td>{user.city}</td>
            <td>{user.dist}</td>
            <td>{user.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    )
  }
}

export default GetClients