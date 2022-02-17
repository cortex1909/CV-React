const EducationBox = ({ state, onChange }) => {
  return (
    <div className="inputBox">
      <h2>Education</h2>
      <form>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter School Name"
            name="schoolName"
            className="form__field"
            value={state['education'].schoolName}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="schoolName" className="form__label">
            Enter School Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Start Year"
            name="startYear"
            className="form__field"
            value={state['education'].startYear}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="startYear" className="form__label">
            Enter Start Year
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter End Year"
            name="endYear"
            className="form__field"
            value={state['education'].endYear}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="endYear" className="form__label">
            Enter End Year
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            className="form__field"
            value={state['education'].location}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="schoolLocation" className="form__label">
            Enter Location
          </label>
        </div>
      </form>
    </div>
  )
}

export default EducationBox
