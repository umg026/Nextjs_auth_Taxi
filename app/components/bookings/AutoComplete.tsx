import React from 'react'

export default function AutoComplete() {
    return (
        <div>
            <form action="">
                <div className='mt-3'>
                    <label htmlFor="form">
                        where From ?
                        <input type="text" placeholder='enter your location' className='placeholder:text-[13px] w-full border-[1px] outline-none p-1 rounded-md focus:border-yellow-400' />
                    </label>
                    <br />
                    <br />
                    <label htmlFor="form">
                        where To ?
                        <input type="text" placeholder='enter your drop location' className='placeholder:text-[13px] w-full border-[1px] outline-none p-1 rounded-md focus:border-yellow-400' />
                    </label>
                </div>
            </form>
        </div>
    )
}
