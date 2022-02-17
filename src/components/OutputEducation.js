const OutputEducation = ({ state }) => {
  return (
    <>
      <p className="output">
        <strong>School Name:</strong> {state['education'].schoolName}
      </p>
      <p className="output">
        <strong>Year of beginning:</strong> {state['education'].startYear}
      </p>
      <p className="output">
        <strong>Year of ending:</strong> {state['education'].endYear}
      </p>
      <p className="output">
        <strong>Location:</strong> {state['education'].location}
      </p>
    </>
  )
}
export default OutputEducation
