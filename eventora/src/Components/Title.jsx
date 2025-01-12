import React from 'react'

function Title({text}) {
  return (
    <div className=' text-4xl lg:text-[44px] m-7 leading-tight lg:ml-10  '>
        {
            text
        }
    </div>
  )
}

export default Title