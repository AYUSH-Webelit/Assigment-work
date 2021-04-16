import React from 'react'
import './info.css'
import {LoremIpsum } from 'react-lorem-ipsum';

export default function Info() {
     return (
          <div className='mt6 ma2 pa5'>
               <div className='br4 spacing'>
                 <h1>who are we?</h1>
                 <p >Some of the members knew each other before the group was formed. Bradley and Brown both attended Bexley Grammar School in London and KSI and Minter both attended Berkhamsted School in Hertfordshire.</p>
               </div>
               <div className='br4 spacing'>
                    <h1>The Company</h1>
                    <LoremIpsum p={1}/>
               </div>
               <div className='br4 spacing'>
                    <h1>Our Strength</h1>
                    <LoremIpsum p={1} />
               </div>
          </div>
             
     )    
}
