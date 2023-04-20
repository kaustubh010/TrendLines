import React from 'react'

export default function Spinner() {
    return (
      <div className='text-center flex justify-center items-center'>
          <img className='my-3' src={'/loading.gif'} alt="loading" />
      </div>
    )
}