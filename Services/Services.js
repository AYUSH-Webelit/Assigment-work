import React from 'react';
import './Services.css';
import video from './video.png';
import tshirt from './tshirt.webp';
import lol from './lol.png';
import gaming from './gaming.png';

export default function () {
     return (
          <div className=''>
               <h1 className='tc white'>Our Services</h1>
               
               <div className='container'>Weekly videos
               <a href='https://www.youtube.com/channel/UCDogdKl7t7NHzQ95aEwkdMw'>
               <img className='ph3' src={video} height='50px' width='50px'/></a></div>
               
               <div className='container'>Clothings
               <a href='https://www.sidemenclothing.com/'>
               <img className='ph3' src={tshirt} height='50px' width='50px'/></a></div>
              
               <div className='container'>
               Memes<a href='https://www.instagram.com/_moresidemen_/?hl=en'>
               <img className='ph3' src={lol} height='50px' width='50px'/></a></div>
               
               <div className='container'>
               Gaming<a href=''>
               <img className='ph3' src={gaming} height='50px' width='50px'/></a></div>
          </div>
     )
}
