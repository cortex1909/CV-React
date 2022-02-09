import React, { Component } from 'react'

export class About extends Component {
  state = {
    name: '',
    dateOfBirth: '',
    nationality: '',
    location: '',
    gender: '',
    contact: '',
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addAbout(this.state)
  }

  render() {
    return (
      <section>
        <h2>About Me</h2>
        <form onSubmit={this.onSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Enter date of birth (dd/mm/yyyy)"
            value={this.state.dateOfBirth}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Enter nationality"
            value={this.state.nationality}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={this.state.location}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Enter gender (M/F)"
            value={this.state.gender}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Enter email"
            value={this.state.contact}
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    )
  }
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
}

export default About
// about me {name, birth, nationality, location, gender, contact}
