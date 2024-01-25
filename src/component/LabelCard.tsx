import React from 'react'

const LabelCard = ({text, styleConfig, rdLeft, rdRight} : any) => {
    console.log(styleConfig)
  return (
    <div
    style={{
        borderBottomRightRadius: rdRight,
        borderBottomLeftRadius: rdLeft,
    }}
    className={`w-20 h-10 ${styleConfig} absolute bg-gray-50 right-0 shadow-xl`}>
      <span>{text}</span>
    </div>
  )
}

export default LabelCard
