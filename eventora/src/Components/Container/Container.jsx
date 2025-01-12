import React from 'react'

function Container({children, className=""}) {
  return (
    <div className={`relative w-full ${className}`}>
        {children}
    </div>
  )
}

export default Container