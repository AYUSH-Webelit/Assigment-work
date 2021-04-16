import React from 'react'
import './Team.css'

import ETHAN from './ETHAN.jpg'
import HARRY from './HARRY.jpg'
import JJ from './JJ.JPG'
import Miniminter from './Miniminter.jpg'
import josh from './josh.jpg'
import vikram from './vikram.png'
import tobi from './tobi.jpg'

export default function Team() {
     return (
          <div className='space mt7'>
               <h1 className='white ba br4 pv1 mb4'>Our Team</h1>

               <div className='grow dib card border'>
               <img className='br4' src={JJ} alt='photo' height='300px' width='300px' />    
               <a href=''><p>KSI</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={HARRY} alt='photo' height='300px' width='300px' />
               <a href=''><p>Haryy</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={ETHAN} alt='photo' height='300px' width='300px' />
               <a href=''><p>Ethan</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={Miniminter} alt='photo' height='300px' width='300px' />
               <a href=''><p>Miniminter</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={josh} alt='photo' height='300px' width='300px'/>
               <a href=''><p>josh</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={tobi} alt='photo' height='300px' width='300px' />
               <a href=''><p>Tobi</p></a></div>

               <div className='card grow dib border'>
               <img className='br4' src={vikram} alt='photo' height='300px' width='300px'/>
               <a href=''><p>VIKKSTAR</p></a></div>
          </div>
     )
}
