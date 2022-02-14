import Input from './Input'

const OtherBox = () => {
  return (
    <div className="inputBox">
      <h2>Other</h2>
      <form>
        <div className="form__group field">
          <textarea
            placeholder="Enter other relevant info..."
            name="textarea"
            className="form__field"
            rows="10"
          />
          <label htmlFor="textarea" className="form__label">
            Enter other relevant info...
          </label>
        </div>
        <input type="submit" value="Save Box" className="btn save" />
      </form>
    </div>
  )
}

export default OtherBox
