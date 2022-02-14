import Input from './Input'

const ExperienceBox = () => {
  return (
    <div className="inputBox">
      <h2>Experience</h2>
      <form>
        <Input type="text" placeholder="Enter Last Job Name" name="jobName" />
        <Input type="text" placeholder="Enter Start Year" name="startYearJob" />
        <Input type="text" placeholder="Enter End Year" name="endYearJob" />
        <Input type="text" placeholder="Enter Location" name="locationJob" />
        <input type="submit" value="Save Box" className="btn save" />
      </form>
    </div>
  )
}

export default ExperienceBox
