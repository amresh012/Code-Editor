import HomePage from './Pages/HomePage';
import EditorPage from './Pages/EditorPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div>
       <Toaster
       position='top-left'
       toastOptions={{
        success:{
          theme:{
            primary: '#4aed88'
          },
        },
       }}
       ></Toaster>
      </div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/editor/:roomId' element={<EditorPage/>}></Route>

      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
