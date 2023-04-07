import React , {useState} from 'react'
import Client from '../component/Client';
import Editor from '../component/Editor';

const EditorPage = () => {

  const[clients , ] = useState([
    {socketId :1 , USERNAME:"Paul M"},
    {socketId :2 , USERNAME:"Paul R"}
]);
  return (
    <div className='mainwrap'>
        <div className='aside'>
          <div className='aside-inner'>
            <div className='editor-logo'>
              <img 
              className='logoImage'
              src="/link.png" alt='logo'/>

            </div>
            <h3 className='connected-text'>Connected</h3>
            <div className='clientlist'>
              {clients.map((client) =>(
                    <Client key={client.socketId} USERNAME={client.USERNAME}/>
              ))}
            </div>
          </div>
          <button className='btn copybtn'>Copy ROOM ID</button>
          <button className='btn leavebtn'>Leave</button>
        </div>
        <div  className='editorpage'>
          <Editor />
        </div>
    </div>
  )
}

export default EditorPage