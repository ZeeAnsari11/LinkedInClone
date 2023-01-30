import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

const HeaderOptions = ({avatar, Icon, title ,onClick}) => {
  return (
    // header options
    <div className='flex-col rounded-sm h-12 text-gray-400 bg-transparent cursor-pointer hover:text-black  text-center mr-3' onClick={onClick}>
    {
        // header options icon
        Icon && <Icon/>
    }
    {/* avatar  */}
    {
      avatar &&<Avatar className='h-[10px]' src={avatar} />
    }
    {/* header options title */}
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderOptions

