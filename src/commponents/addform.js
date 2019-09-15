import React from 'react'
import axios from 'axios'

const API_STRING = `http://dummy.restapiexample.com/api/v1/create`

class PersonListPost extends React.Component {
  state = {
    name: '',
    salary:'',
    age:'',
    data: undefined
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const user = {
      name: this.state.name,
      salary: this.state.salary,
      age: '741852963'
    }

    axios.post(API_STRING,user).then(response => {
        alert("Berhasil Menambahkan data");
        this.props.modalAddClose();
    })
    // axios.post(API_STRING, { user }).then(response => {
    //   this.setState({
    //     data: response.data
    //   })
    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />
          <label>Salary:</label>
          <input type='text' name='salary' value={this.state.salary} onChange={this.handleChange} /><br />
          <button type='submit'>Add Person</button>
        </form>
      </div>
    )
  }
}

export default PersonListPost
