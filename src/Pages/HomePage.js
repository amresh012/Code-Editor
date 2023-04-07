import React, { useState } from 'react';
import './index.css'
import {v4} from 'uuid';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
  const navigate = useNavigate();
  const [roomId , setRoomId] = useState('');
  const [USERNAME , setusername] = useState('');
  const createNewRoom =(e) =>{
    e.preventDefault();

    const id = v4();
    setRoomId(id);
    toast.success('Created a new room');
  };

  const JoinRoom = () =>{
      if(!roomId || !USERNAME)
      {
        toast.error('RoomId and Username is required')
        return;
      }
      //redirect 
      navigate(`/editor/${roomId}`,{
        state:{
          USERNAME,
        },
      })
  };

  const HandleinputEnter = (e) =>{
    if(e.code === "Enter")
    {
      JoinRoom();
    }
  }
  return (
    <div className='homepage-wrapper'>
        <div className='formwrapper'>
        <img src='/link.png' alt="logo2" className="logo"/>
        <h4 className='mainlabel'>Provide invitation ROOM ID</h4>
        <div className='inputgroup'>
          <input 
          type="text"
          className="inputbox"
          placeholder='ROOM ID'
          onChange={(e)=> setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={HandleinputEnter}
          />

          <input 
          type="text"
          className='inputbox'
          placeholder='USERNAME'
          onChange={(e)=> setusername(e.target.value)}
          value={USERNAME}
          onKeyUp={HandleinputEnter}
          
          />
          <button className=' joinbtn' onClick={JoinRoom}>Join</button>
          <span className='createinfo'>If You Don't Have an Invite then Create &nbsp;
           <a href='index.js' onClick={createNewRoom} className='createnewbutton'>New Room</a> 
          
          
          
          </span>
        </div>
        </div>
    <h4 className='Addinfo'> Developed By &nbsp; 
      <a href='https://github.com/amresh012' className='githublink'>Amresh Mishra</a>
    </h4>
    </div>
  )
}

export default HomePage