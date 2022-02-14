import React from 'react'

const OutputExp = ({ state }) => {
  return (
    <>
      <p className="output">
        <strong>Job Name:</strong> {state.jobName}
      </p>
      <p className="output">
        <strong>Year of beginning:</strong> {state.startYear}
      </p>
      <p className="output">
        <strong>Year of ending:</strong> {state.endYear}
      </p>
      <p className="output">
        <strong>Location:</strong> {state.location}
      </p>
    </>
  )
}

export default OutputExp
