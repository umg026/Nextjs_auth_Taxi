import React from 'react'
import AutoComplete from './AutoComplete'

export default function Booking() {
    // const screen = window?.innerHeight*0.72;
    return (
        <div className='p-2'>
            <h2 className='font-semibold text-xl'>Bookings </h2>
            <div className='border-[1px] p-5 mt-2'>

            <AutoComplete />
            </div>
        </div>
    )
}
