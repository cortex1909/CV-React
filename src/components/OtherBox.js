const OtherBox = ({ state, onChange }) => {
  return (
    <div className="inputBox">
      <h2>Other</h2>
      <form>
        <div className="form__group field">
          <textarea
            placeholder="Enter other relevant info..."
            name="text"
            className="form__field"
            rows="10"
            value={state['other'].text}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="textarea" className="form__label">
            Enter other relevant info...
          </label>
        </div>
      </form>
    </div>
  )
}

export default OtherBox
