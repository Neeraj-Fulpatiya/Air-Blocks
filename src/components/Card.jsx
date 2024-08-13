import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import {motion} from 'framer-motion'
// Framer Motion is a popular library for animations in React. 
const Card = ({data,reference}) => {// esa nhi likhta or m agr props likhta bina braces k to fr props.data kr k lihte rhta islie mne use destructure kr dia
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.3}} className=' relative w-[160px] h-[190px] rounded-[20%] py-5 px-4 bg-zinc-700 p-5 text-white overflow-hidden '>
<FaFileAlt/>
<p className='font-semibold text-[10px]'>{data.desc}</p>
{/* jis naam se wha se send kia h usi nam se yha b receive rkrna  pdega */}
<div className='absolute bottom-0  w-full left-0'> 
  <div className=' flex items-center  px-1 py-3  mb-3 justify-between '>
    <FaDownload />
    {data.filesize}
    </div>
    <div className=' tag w-full py-4 bg-green-600 flex items-center justify-center'>
        <h3 className=' text-md font-semibold '>dwonload now </h3>
    </div>
</div>
         </motion.div>
  )
}

export default Card