import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderComponent from './component/SliderComponent';
import Service from './component/Service';
import DoubleSlide from './component/DoubleSlide';
import Test from './component/Test';
import BodyContent from './component/BodyContent';

function App() {

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
        <div className='w-[60%] m-auto pt-11'>
            <SliderComponent slider={slides}></SliderComponent>
            <Service></Service>
            <DoubleSlide></DoubleSlide>
            <BodyContent></BodyContent>
        </div>
  )
}

export default App
