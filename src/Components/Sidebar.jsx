import { Avatar } from "@mui/material";
import React from "react";
import bgprofile from "../Images/bg.jpeg";
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const userStatus = useSelector((state) => state.user.UserStatus);

    const recentItems = (topic) => {
        return (<div className="flex text-sm text-gray-400 font-bold mt-[10px] hover:bg-neutral-100 hover:rounded-xl hover:cursor-pointer hover:text-black">
            <span className="mr-3 ml-3">#</span>
            <p>{topic}</p>
        </div>)

    }
    return (
        //   sidebar
        <div className="sticky top-2 flex-[0.2] round[10] text-center h-fit ">
            {/* sidebar top */}
            <div className="flex items-center  rounded-tl-xl	rounded-tr-xl bg-white pb-3 flex-col">
                <img
                    src={bgprofile}
                    alt=""
                    className="-mb-[20px] h-16 w-full rounded-r-xl rounded-l-xl object-cover"
                />
                {/* sidebar avatar */}
                <Avatar className="mb-[10px] flex items-center flex-col">
                    {userStatus.email[0]}
                </Avatar>
                <h2>{userStatus.displayName}</h2>
                <h4 className="text-gray-400 "> {userStatus.email}</h4>
            </div>
            {/* sidebar stats */}
            <div className="p-3 mb-3 border bg-white rounded-bl-xl	rounded-br-xl">
                {/* sidebar stat */}
                <div className="mt-[10px] flex justify-between ">
                    <p className="text-gray-400 font-semibold text-sm">Who Viewed You</p>
                    <p> 2,543</p>
                </div>
                {/* sidebar stat */}
                <div className="mt-[10px] flex justify-between ">
                    <p className="text-gray-400 font-semibold text-sm">Views on Post</p>
                    <p> 2,338</p>
                </div>
            </div>
            {/* sidebar bottom  */}
            <div>
                <div className="text-left p-3 border border-solid bg-white rounded-xl mt-3 pb-3">
                    Recent
                    {recentItems('react.js')}
                    {recentItems('Node.js')}
                    {recentItems('Express.js')}
                    {recentItems('Vue.js')}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
