import React from 'react'

function Button({name,
  className = "",
  children
}) {
  return (
    <div className='w-[80%] mx-auto flex justify-center'>
        <button
   className={`${className} px-3 py-2 w-full lg:w-[90%] bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] text-white
   rounded-3xl mt-2 font-medium hover:text-[#9232b8b4] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:border hover:border-[#9232b8b4] `}
   type='submit'
   >
    {name}
    {children}
   </button>
    </div>
   
  )
}

export default Button