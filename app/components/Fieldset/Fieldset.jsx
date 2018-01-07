import React from 'react'
import PropTypes from 'prop-types'

const Fieldset = ({ title, children }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset__title">
        {title}
      </legend>
      <div className="fieldset__children">
        {children}
      </div>
    </fieldset>
  )
}

Fieldset.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Fieldset
