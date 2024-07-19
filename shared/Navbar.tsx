import React from 'react'

export default function Navbar() {
    return (
        <div className='flex '>
            <h1 className='bg-yellow-400 text-white px-3 py-1 text-xl mt-2 rounded-md'>
                Taxi
            </h1>
            <h1 className=' px-1 py-1 mt-2 font-semibold text-xl'>Wala
                <span className='text-sm'>.com</span>
            </h1>
        </div>
    )
}
