const OutputAbout = ({ state }) => {
  return (
    <>
      <p className="output">
        {state['about'].firstName} {state['about'].lastName}
      </p>
      <p className="output">{state['about'].email}</p>
      <p className="output">{state['about'].location}</p>
    </>
  )
}
export default OutputAbout
