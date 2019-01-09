import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({email, description}) => {
  return (
    <div
      className='content'
      style={{border: '4px solid red', padding: '2em 4em'}}>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p>{description}</p>
    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Contact
