import React from 'react';
import "./home.scss";
import Navbar from '../Components/navbar/Navbar';
import Featured from '../Components/featured/Featured';
import List from '../Components/list/List';
export default function home() {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type="movie"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

  

