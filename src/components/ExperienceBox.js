const ExperienceBox = ({ state, onChange }) => {
  return (
    <div className="inputBox">
      <h2>Experience</h2>
      <form>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Last Job Name"
            name="jobName"
            className="form__field"
            value={state['experience'].jobName}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="jobName" className="form__label">
            Enter Last Job Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Start Year"
            name="startYear"
            className="form__field"
            value={state['experience'].startYear}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="startYearJob" className="form__label">
            Enter Start Year
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter End Year"
            name="endYear"
            className="form__field"
            value={state['experience'].endYear}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="endYearJob" className="form__label">
            Enter End Year
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            className="form__field"
            value={state['experience'].location}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="locationJob" className="form__label">
            Enter Location
          </label>
        </div>
      </form>
    </div>
  )
}

export default ExperienceBox
