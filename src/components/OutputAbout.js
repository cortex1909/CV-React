const OutputAbout = ({ state }) => {
  return (
    <>
      <p className="output">
        {state.firstName} {state.lastName}
      </p>
      <p className="output">{state.email}</p>
      <p className="output">{state.location}</p>
    </>
  )
}
export default OutputAbout
