import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';

function App() {
  return (

      <Routes>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </Routes>
  );
}

export default App;
