import React from 'react'

const OutputExp = ({ state }) => {
  return (
    <>
      <p className="output">
        <strong>Job Name:</strong> {state['experience'].jobName}
      </p>
      <p className="output">
        <strong>Year of beginning:</strong> {state['experience'].startYear}
      </p>
      <p className="output">
        <strong>Year of ending:</strong> {state['experience'].endYear}
      </p>
      <p className="output">
        <strong>Location:</strong> {state['experience'].location}
      </p>
    </>
  )
}

export default OutputExp
