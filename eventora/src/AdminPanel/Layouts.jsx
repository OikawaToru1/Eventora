import React from 'react'
import Sidebar from './Sidebar'
import AdminPosts from './AdminPosts'
import AdminLogin from './AdminLogin'
function Layouts() {
  return (
    <div className='flex gap-10 w-full'>
        {/* <AdminLogin/> */}
        <Sidebar/>
        <AdminPosts/>
    </div>
  )
}

export default Layouts