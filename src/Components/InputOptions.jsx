import React from 'react'

const InputOptions = ({Icon, title, color}) => {
  return (
    // input option
    <div className='flex items-center mt-4 cursor-pointer hover:bg-neutral-100 hover:rounded-xl '>
      <Icon style={{color : color}}/>
      <h4 className='mt-[5px]'>{title}</h4>
    </div>
  )
}

export default InputOptions
