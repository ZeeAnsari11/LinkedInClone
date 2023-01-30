import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogOut } from '../Redux/UserSlice';
import LoginImage from '../Images/LoginImage.jpeg'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';


const Login = () => {

  const auth = getAuth();
  const userStatus = useSelector((state) => state.user.UserStatus);


  const [name, setName] = useState ('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');


  const inputStyle = 'w-[350px] h-[50px] text-sm px-[10px] mb-[10px] rounded'
  const dispatch = useDispatch();

  const register=()=>{
    try{
      if(!name){
       return  alert("Please Enter a Full Name");
      }
     createUserWithEmailAndPassword(auth, email, password)
     .then(({user})=>{
        updateProfile(user , {
        displayName : name,
        photoURL : profilePic,
       }).then(()=>{
        dispatch(LogIn(({
          email : user.email,
          uid : user.uid,
          displayName : name,
          photoUrl : profilePic
        })))
       })
     })
    }
    catch(e){
      alert("========="+ e);
    }
  }

  const LogInToApp= (e)=>{
    e.preventDefault(); 
   signInWithEmailAndPassword(auth, email, password)
   .then(({user})=>{
    dispatch(LogIn({
          email: user.email,
          uid: user.uid,
          displayName:user.displayName,
          photoUrl: user.photoURL
    }))
   })
   .catch((e)=>{
    return alert(e);
   })
  }

  return (
    <> 
    {/* LogIn */}
    <div className='grid mx-0 py-[100px] place-items-center bg-[#f3f2ef] h-screen'>
      <img src={LoginImage} alt="Login Linked Image" className='object-contain h-[90px] my-5'/> 

      <form className='flex flex-col'>
      <input className={inputStyle} type='text' placeholder='Full Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className={inputStyle}  type='text' placeholder='Pofile pic URL' value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}/>
      <input className={inputStyle}  type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className={inputStyle} type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className= "w-[350px] h-[50px] text-lg text-white bg-[#007461] rounded-lg"  onClick={LogInToApp}> Sign In</button>
    </form>
    {/* login Register */}
    <p>Not a Member
      <span className='text-[#0177b7] cursor-pointer' onClick={register}> Register Now</span>
    </p>
      <div>
        <button onClick={() => dispatch(LogIn('LogIn'))}>Login</button>
      </div>
    </div> 
    </>
  )
}

export default Login