import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null);
    const data=[
        {
            desc:"adsasd dsfsdfs erfc ed eaeda asd",
            filesize:".9mb",
            close:"true",
            tag:{isOpen:true,tagTitle:"Download now ", tagcolor:"green"},
        },
        {
          desc:"%%%%%%%%%%%%%%%%%%%%%%adsasd cgvhgdsfsdfs erfc ed eaeda asd",
          filesize:".59mb",
          close:"true",
          tag:{isOpen:true,tagTitle:"Download now ", tagcolor:"green"},
      },
      {
        desc:"adsavghsd dsfsdfs erfc ed eaeda asd",
        filesize:".96mb",
        close:"false",
        tag:{isOpen:true,tagTitle:"Download now ", tagcolor:"green"},
    },
    
    ];
  return (

 <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
 
 {data.map((item,index)=>
   (
<Card data={item} reference={ref}/>

   ) 
 )}
 
   </div>

 );
}

export default Foreground 