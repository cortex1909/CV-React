import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Info from './components/Info'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    about: [],
  }

  addAbout = (state) => {
    const aboutMe = {
      name: state.name,
      dateOfBirth: state.dateOfBirth,
      nationality: state.nationality,
      location: state.location,
      gender: state.gender,
      contact: state.contact,
    }
    this.setState({
      about: [...this.state.about, aboutMe],
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <About addAbout={this.addAbout} />
          <Info about={this.state.about} />
        </div>
        <Footer />
      </div>
    )
  }
}

/*

education {from-to, name, location, description, title}
work experience {from-to, name, description, location}
language skills {name of language, A1-C1 picker}
other skills input

*/
