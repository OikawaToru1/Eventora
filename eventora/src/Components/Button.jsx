import React from 'react'

function Button({name,
  className = ""
}) {
  return (
   <button
   className={`${className} px-3 py-1 bg-black text-white
   rounded-xl mt-2 `}
   type='submit'
   >
    {name}
   </button>
  )
}

export default Button