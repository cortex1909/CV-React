const Input = ({ type, placeholder, name }) => {
  return (
    <div className="form__group field">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="form__field"
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
    </div>
  )
}

export default Input
