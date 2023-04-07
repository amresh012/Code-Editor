import React from 'react'
import Avatar from 'react-avatar'


const Client = ({USERNAME}) => {
  return (
    <div className='client'>
        <Avatar name={USERNAME} size={50} round='14px'/>
        <span className='username'>{USERNAME}</span>
    </div>
  )
}

export default Client