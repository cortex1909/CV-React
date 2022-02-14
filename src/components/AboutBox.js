import Input from './Input'

const AboutBox = () => {
  return (
    <div className="inputBox">
      <h2>About Me</h2>
      <form>
        <Input type="text" placeholder="Enter First Name" name="firstName" />
        <Input type="text" placeholder="Enter Last Name" name="lastName" />
        <Input type="text" placeholder="Enter Email" name="email" />
        <Input type="text" placeholder="Enter Location" name="location" />
        <input type="submit" value="Save Box" className="btn save" />
      </form>
    </div>
  )
}

export default AboutBox
