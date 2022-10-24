import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>You've got the wrong way</h1>
        <Link to="/" className='btn btn-primary'>Go Home</Link>
      </div>
    </section>
  )
}

export default Error
