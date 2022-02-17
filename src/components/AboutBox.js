const AboutBox = ({ state, onChange }) => {
  return (
    <div className="inputBox">
      <h2>About Me</h2>

      <form /* onSubmit={onSubmit} */>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            className="form__field"
            value={state['about'].firstName}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="firstName" className="form__label">
            Enter First Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            className="form__field"
            value={state['about'].lastName}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="lastName" className="form__label">
            Enter Last Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            className="form__field"
            value={state['about'].email}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="email" className="form__label">
            Enter Email
          </label>
        </div>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            className="form__field"
            value={state['about'].location}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="location" className="form__label">
            Enter Location
          </label>
        </div>
      </form>
    </div>
  )
}

export default AboutBox
