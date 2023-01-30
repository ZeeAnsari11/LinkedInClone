import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import { forwardRef } from 'react'

const Post = forwardRef(({name , desciption, message, photoUrl},ref) => {
  return (
    // post
   <div ref = {ref }className='bg-white p-4 mb-3 rounded-md'>
    {/* post header */}
     <div className='flex mb-3' >
        <Avatar src={photoUrl}/>
        {console.log(photoUrl)}
        {/* post info */}
        <div className='ml-3'>
            <h2 className='text-lg'>{name} </h2>
            <p className='text-gray-400 text-sm'>{desciption}</p>
        </div>
    </div>
    {/* post Body */}
    <div className='break-normal'>
        <p>{message}</p>
    </div>
    {/* post buttons */}
    <div className='flex justify-evenly'>
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
        <InputOptions Icon={MessageIcon} title="Comment" color="gray"/>
        <InputOptions Icon={ShareIcon} title="Share" color="gray"/>
        <InputOptions Icon={SendIcon} title="Send" color="gray"/>
    </div>
   </div>
  )
})

export default Post