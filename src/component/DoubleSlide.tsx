import React from 'react'
import DoubleSlideItem from './DoubleSlideItem'

const DoubleSlide = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col w-[40%]'>
        <div className='flex flex-col my-4'>
            <div className='w-[30px] justify-center items-center text-center h-[30px] rounded-full bg-red-700'>
                <span className='text-white font-semibold'>1</span>
            </div>
            <div>
                <h3 className='font-bold my-2 text-[20px]'>Đáp ứng mọi nhu cầu của bạn</h3>
            </div>
            <div>
                <span className='text-gray-500'>Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi sản phẩm</span>
            </div>
        </div>
        <div className='flex flex-col my-4'>
            <div className='w-[30px] justify-center items-center text-center h-[30px] rounded-full bg-red-700'>
                <span className='text-white font-semibold'>1</span>
            </div>
            <div>
                <h3 className='font-bold my-2 text-[20px]'>Đáp ứng mọi nhu cầu của bạn</h3>
            </div>
            <div>
                <span className='text-gray-500'>Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi sản phẩm</span>
            </div>
        </div>
        <div className='flex flex-col my-4'>
            <div className='w-[30px] justify-center items-center text-center h-[30px] rounded-full bg-red-700'>
                <span className='text-white font-semibold'>1</span>
            </div>
            <div>
                <h3 className='font-bold my-2 text-[20px]'>Đáp ứng mọi nhu cầu của bạn</h3>
            </div>
            <div>
                <span className='text-gray-500'>Tới chuyến bay lưu trú, đến điểm tham quan bạn có thể tìm chọn mọi sản phẩm</span>
            </div>
        </div>
      </div>
      <div>
        <div>
            <div className='w-[300px] relative z-1 h-[450px]'>
                <div className='w-[300px] top-0 left-0 z-1 h-[450px] bg-red-700'>
                </div>
                <div className='w-[300px] h-[150px] mt absolute top-28 -left-32 bg-yellow-300'></div>
                <DoubleSlideItem mgTop={-30} mgLeft={28}></DoubleSlideItem>
                <DoubleSlideItem mgTop={40} mgLeft={-100}></DoubleSlideItem>
                <DoubleSlideItem mgBotton={'bottom-0 -mb-6'} mgTop={80} mgLeft={30}></DoubleSlideItem>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DoubleSlide
