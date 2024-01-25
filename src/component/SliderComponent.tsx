import React, { useState } from 'react'

const SliderComponent = ({slider} : any) => {
    const [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slider.length - 1);
        else setCurrent(current-1);
    }


    let nextSlide = () => {
        if (current === slider.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }


  return (
    <div className='overflow-hidden relative'>

        <div className='flex transition ease-out duration-75'
            style={{transform: `translateX(-${current * 100}%)`}}
        >
            {
                slider.map((item : any) => {
                    return <img src={item} alt="" />
                })
            }
        </div>
      

    <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <span>Previous</span>
        </button>
        <button onClick={nextSlide}>
          <span>Next</span>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slider.map((s : any, i : any) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-transparent border-[2px]"
              }`}
            ></div>
          );
        })}
      </div>

    </div>
  )
}

export default SliderComponent
