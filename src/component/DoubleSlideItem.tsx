import React from 'react'

const DoubleSlideItem = ({mgTop, mgLeft, mgBotton} : any) => {
  console.log('mgTop', mgTop, 'mgLeft', mgLeft)
  return (
<div 
style={{
  marginTop: mgTop,
  marginLeft: mgLeft
}}
className={`w-[200px] absolute flex justify-between ${mgBotton ? mgBotton : 'top-0'}  shadow-2xl px-5 items-center h-[50px] bg-white rounded-md`}>
      <div className='w-[30px] h-[30px] rounded-full bg-pink-600'></div>
      <div className='flex flex-col'>
        <div>Nguyen Van A</div>
        <span className='font-semibold text-yellow-300'>4.2</span>
      </div>
    </div>
  )
}

export default DoubleSlideItem
