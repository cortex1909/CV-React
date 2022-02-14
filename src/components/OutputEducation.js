const OutputEducation = ({ state }) => {
  return (
    <>
      <p className="output">
        <strong>School Name:</strong> {state.schoolName}
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
export default OutputEducation
