import React from 'react'

function Container({children, className=""}) {
  return (
    <div className={`my-8 w-full ${className}`}>
        {children}
    </div>
  )
}

export default Container