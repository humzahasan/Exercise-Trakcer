import React, { Component } from 'react'
import axios from 'axios'

export class CreateUser extends Component {
    constructor(props) {
        super(props)
    
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
    
        this.state ={
        username : ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username : this.state.username
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username : ''
        })
    }


    
    
    render() {
        return (
            <div>
              <form onSubmit={this.onSubmit}>
                  <label>Username:</label>
                  <input type="text"
                        required
                        className="form-control"        
                        value={this.state.username}
                        onChange= {this.onChangeUsername}
                  />
                <br />
                  <input type="submit" value="Create User" className="btn btn-primary"/>
            </form>  
            </div>
        )
    }
}

export default CreateUser
