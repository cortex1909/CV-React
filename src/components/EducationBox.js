import Input from './Input'

const EducationBox = () => {
  return (
    <div className="inputBox">
      <h2>Education</h2>
      <form>
        <Input type="text" placeholder="Enter School Name" name="schoolName" />
        <Input type="text" placeholder="Enter Start Year" name="startYear" />
        <Input type="text" placeholder="Enter End Year" name="endYear" />
        <Input type="text" placeholder="Enter Location" name="schoolLocation" />
        <input type="submit" value="Save Box" className="btn save" />
      </form>
    </div>
  )
}

export default EducationBox
