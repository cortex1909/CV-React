import React from 'react'

const OutputOther = ({ state }) => {
  return (
    <>
      <p className="output">{state['other'].text}</p>
    </>
  )
}

export default OutputOther
