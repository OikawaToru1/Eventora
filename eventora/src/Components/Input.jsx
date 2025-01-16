import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId();
    

    return (
        <div className='w-[80%] flex flex-col mx-auto my-5 lg:pl-5'>
            {label && <label className='text-xl indent-2  font-medium ' 
            htmlFor={id}>
                {label}
                </label>}
                <input type={type}
                className= {`px-3 py-2 rounded-lg bg-transparent text-black outline-none
                      font-medium border border-gray-200 w-[100%] lg:w-[95%] placeholder:text-[#d3d3d3]
                     ${className}`}
                     ref={ref}
                     {...props}
                     id={id}
                /> 
        </div>
    )
})

export default Input