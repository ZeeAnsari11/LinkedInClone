import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import CollectionsIcon from '@mui/icons-material/Collections';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db, firebaseApp } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { query, orderBy } from "firebase/firestore";  
import FlipMove from 'react-flip-move';
import { LogOut } from '../Redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';


const Feed = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.UserStatus);

  const [posts, setPosts] = useState([]);
  const [message , setMessage] = useState('');

  useEffect(() => {
    const ref = collection(db,'posts');
    const q = query(ref, orderBy("date", "desc"));
    getDocs(q).then((resp)=>{
      const x = resp.docs.map((data) => ({...data.data(), id:data.id}))
      setPosts(x);
    })
  },[message])

  const sendPost = (e) => {
    e.preventDefault();
    setMessage('');
    const ref = collection(db,'posts')
    addDoc(ref, {
      name: userStatus.displayName,
      desciption:"This is test noe right",
      message: message,
      photoUrl : userStatus.photoUrl,
      date: new Date().toLocaleString(),
    })
  }



  return (
    // feed
    <div className='flex-[0.6] mt-0 mb-5 ml-[15px]'>
      {/* feed input container */}
      <div className='bg-white p-[10px] pb-[20px] rounded-xl mb-5 pl-[15px]'>
        {/* feed input*/}
        <div className='border border-gray-300 rounded-[30px] p-3 text-gray-700 pl-[15px] flex'>
          <CreateIcon />
          <form onSubmit={sendPost} className='flex w-[100%]'>
            <input onChange ={(e)=>setMessage(e.target.value)} value={message} type="text" className='border-none flex-1 ml-[10px] outline-0 font-semibold	' />
            <button type='submit' className='hidden'>Send</button>
          </form>
        </div>
        {/* feed input options */}
        <div className='flex justify-evenly'>
          <InputOptions title="Photo" Icon={CollectionsIcon} color="#7085F9" />
          <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOptions title="Photo" Icon={CalendarViewDayIcon} color="#7FC15E" />

        </div>
      </div>
      {/* posts */}
      <FlipMove>
      {
        posts.map(({id, name, message, description, photoUrl}) => {
          return (<div key={id}>
            <Post name={name} desciption={description} message={message} photoUrl={photoUrl} key={id}/>
          </div>)
        })
      }
      </FlipMove>
      <div>
      </div>
      <button onClick={()=>dispatch(LogOut('LogOut'))}>Logout</button>
    </div>
  )
}

export default Feed