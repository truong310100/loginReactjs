import React from 'react'

export default function Resiger() {
  return (
    <div className='py-2'>
        <div>
            <input type="text" className="border w-full outline-none my-1 p-2 rounded hover:border-blue-900" placeholder='Họ và tên'/>
            <input type="text" className="border w-full outline-none my-1 p-2 rounded hover:border-blue-900" placeholder='Số điện thoại hoặc email'/>
        
        </div>
        
        <div className='flex justify-center'>
            <button className='bg-blue-900 text-white hover:bg-blue-800 rounded-3xl px-5 py-1'>Đăng Ký</button>
        </div>
  </div>
  )
}
