import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LI from '../Images/linkedinImage.jpeg'
import HeaderOptions from './HeaderOptions';
import { HeaderOptionsMenu } from '../HeaderOptionsMenu';
import { useSelector ,useDispatch } from 'react-redux';
import { LogOut } from '../Redux/UserSlice';
import { getAuth } from "firebase/auth";


const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const userStatus = useSelector((state) => state.user.UserStatus);

  const LogOutOfApp = ()=>{
    dispatch(LogOut({}));
    auth.signOut()

  }
  return (
    // header
    <div className='flex justify-evenly border-b-[1px] border-[#b0b3b5] py-[10px] w-full sticky mt-0 z-50 bg-white' >
      {/* header__left */}
      <div className='flex space-x-2 items-center'>
        {/* img */}
        <img src={LI} className='h-12' />
        {/* search*/}
        <div className=' px-4 py-2 flex text-center items-center rounded-md  text-gray-600 bg-[#eef3f8]'>
          <SearchIcon />
          <input placeholder='Search' type='text' className='outline-none bg-[#eef3f8]' />
        </div>
      </div>
      {/* header right */}
      <div className='flex text-sm'>
        {
          HeaderOptionsMenu.map(({Icon,title}, index)=><HeaderOptions key={index} Icon={Icon} title={title}/> )
        }
      </div>
      <HeaderOptions title={'Me'} avatar={userStatus.photoUrl} onClick= {LogOutOfApp}/>
    </div>
  )
}

export default Header