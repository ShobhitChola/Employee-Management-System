import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setemail("");
        setpassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-3xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
                // console.log("email is", email)
                // console.log("password is", password)
            }}
            className='flex flex-col items-center justify-center '>
                <input
                value={email}
                onChange={(e) => {
                    setemail(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your email' 
                />
                <input 
                value={password}
                onChange={(e) => {
                    setpassword(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3' type="password" placeholder='Enter password' />
                <button className='mt-5 text-white outline-none placeholder:text-white bg-emerald-600 py-3 px-5 text-xl rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login