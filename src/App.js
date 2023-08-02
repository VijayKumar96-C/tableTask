import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRqst } from '../src/redux/action';
import Dashboard from './Dashboard';

function App() {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector((state) => state.data)

  useEffect(()=>{
    dispatch(fetchDataRqst())
  },[dispatch])



  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
