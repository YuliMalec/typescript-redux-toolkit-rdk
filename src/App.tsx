import React,{useEffect} from 'react';
import { userSlice } from './store/redusers/UserSlice';
import { useAppDispatch,useAppSelector } from './hooks/redux';



import './App.css';
import { fetchUsers } from './store/redusers/ActionCrietors';

function App() {
 const {users} = useAppSelector(state=>state.UserReduser)
  const dispatch = useAppDispatch()
  useEffect(()=>{
     dispatch(fetchUsers())
  })
  console.log(typeof users)
  return (
    <div className="App">
    {JSON.stringify(users)}
     
    </div>
  );
}

export default App;
