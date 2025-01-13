import React from 'react'

function Button({name,
  className = ""
}) {
  return (
    <div className='w-[80%] mx-auto flex justify-center'>
        <button
   className={`${className} px-3 py-2 w-full lg:w-[90%] bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] hover: text-black
   rounded-3xl mt-2 font-medium`}
   type='submit'
   >
    {name}
   </button>
    </div>
   
  )
}

export default Button