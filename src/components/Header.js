import React from 'react'

function Header({ appName }) {
  return (
    <header>
      <nav>
        <p>
          cortex19 <strong>{appName}</strong>
        </p>
      </nav>
    </header>
  )
}

export default Header
