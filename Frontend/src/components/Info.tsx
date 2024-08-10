import React from 'react'
import Card from './Card'
function Info() {
  return (
    <div className='mx-2'>
        <div className='p-2 mx-6 text-4xl font-bold'>What we do ?</div>
        <div className='flex  '>
            <div className='w-1/3 h-24 mx-8  border-black border-r-4 flex justify-center items-center'>
                <Card heading="Real Questions from previous Assessment"/>
            </div>
            <div className='w-1/3 h-24  border-black border-r-4 flex justify-center items-center'>
                <Card heading="Extensive Question Bank"/>
            </div>
            <div className='w-1/3 h-24  flex justify-center items-center'>
                <Card heading="Insights"/>
            </div>
        </div>
    </div>
  )
}

export default Info