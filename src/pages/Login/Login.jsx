import React from 'react'

export default function Login() {
  return (
    <div className='py-2'>
        <div>
            <input type="text" className="border w-full outline-none my-1 p-2 rounded hover:border-blue-900" placeholder='Tài khoản'/>
            <input type="text" className="border w-full outline-none my-1 p-2 rounded hover:border-blue-900" placeholder='Mật khẩu'/>
        
        </div>
        
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <input type="checkbox"/>
                <span className='text-xs px-1'>Ghi nhớ</span>
            </div>
            
            <a href="/quen-mat-khau" className='text-xs hover:text-sm hover:text-blue-900 p-2 underline underline-offset-4'>Quên mật khẩu</a>
        </div>
        <div className='flex justify-center'>
            <button className='bg-blue-900 text-white hover:bg-blue-800 rounded-3xl px-5 py-1'>Đăng nhập</button>
        </div>
  </div>
  )
}
