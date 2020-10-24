import React from 'react'

const Primary = (props) => {
  const {
    children
  } = props
  return (
    <a href="#section-tours" className="btn btn--white btn--animated">{children}</a>
  )
}

export const Primary