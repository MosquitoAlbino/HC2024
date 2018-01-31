import React from 'react'

const Row = ({ children = [], ...rest }) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
}

export default Row
