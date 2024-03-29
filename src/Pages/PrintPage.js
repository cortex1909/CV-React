import { render } from '@testing-library/react'
import React, { Component } from 'react'
import OutputAbout from '../components/OutputAbout'
import OutputEducation from '../components/OutputEducation'
import OutputExp from '../components/OutputExp'
import OutputOther from '../components/OutputOther'

class PrintPage extends Component {
  render() {
    const { state } = this.props

    return (
      <div className="PrintPage">
        <h1>
          {state['about'].firstName} {state['about'].lastName} CV
        </h1>
        <div className="outputBox">
          <h2>About Me</h2>
          <OutputAbout key={state['about'].id} state={state} />
        </div>
        <div className="outputBox">
          <h2>Education</h2>
          <OutputEducation key={state['education'].id} state={state} />
        </div>
        <div className="outputBox">
          <h2>Experience</h2>
          <OutputExp key={state['experience'].id} state={state} />
        </div>
        <div className="outputBox">
          <h2>Other Informations</h2>
          <OutputOther key={state['other'].id} state={state} />
        </div>
      </div>
    )
  }
}

export default PrintPage
