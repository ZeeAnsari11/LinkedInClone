import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogOut } from './Redux/UserSlice';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import Widgets from './Components/Widgets';

function App() {

  const userStatus = useSelector((state) => state.user.UserStatus);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(LogIn({

          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

      }
      else {
      dispatch(LogOut({}));
      }
    })
  }, []); 

  return (
    // <div className='flex mt-9 max-w-[1200px] mx-[9px] bg-[#e1e5e8] flex-col items-center'>
    <div className='bg-[#f3f2ef]'>
      {/* Header */}
      <Header />
      {
        userStatus.email ?
          (<div className='flex flex-1 space-x-4 max-w-[1200px] w-screen m-auto'>
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>) :
          <Login />
      }
    </div>
  );
}

export default App;
