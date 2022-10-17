import logo from './logo.svg';
import './App.css';
import Main from './Main'
import { createContext } from 'react';
import { useState } from 'react';


export const UserContext = createContext()


function App() {
  // const [users, setUsers] = useState({})
  const [user, setUser] = useState({})

  return (
  <UserContext.Provider value={[user,setUser]}>
      <Main/>
    </UserContext.Provider>
 
  );
}

export default App;
