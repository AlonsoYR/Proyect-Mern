import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: []
    } 
    
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/users');
        this.setState({users: res.data});
        console.log(this.setState.users)
    }


  render() {
    return (
      <div className='row'>
        <div className="col-md-4">
            Form User
        </div>
        <div className="col-md-8">
            <ul className="list-group">
                {
                    this.state.users.map(users => <li className='list-group-item list-group-item-action' key={users._id}>
                        {users.usermane}
                    </li>)
                }
            </ul>
        </div>
      </div>
    )
  }
}
