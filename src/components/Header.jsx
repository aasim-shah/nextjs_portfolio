"use client"

import { useTheme } from 'next-themes'
import {FiSun} from 'react-icons/fi'
import {BsMoonStarsFill} from 'react-icons/bs'

import {easeOut, motion} from 'framer-motion'
import {RiExternalLinkLine} from 'react-icons/ri'

import Link from 'next/link'

function Header() {
    const { theme, setTheme } = useTheme()
    
  return (
    <div className='dark:bg-cyan-900 pt-5 border-b-2 pb-2  border-gray-50 dark:border-cyan-800 sm:pt-12 flex flex-row justify-between px-3 sm:px-16'>
        <div className="sm:w-[30%] flex ml-3 sm:ml-8 flex-col ">
            <div className="font-bold "><Link href={"/"} className='flex flex-row gap-[3px]'>
              <motion.span className='flex'  whileHover={{ y : -10 }}>A</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>a</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>s</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>i</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>m</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}></motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>s</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>h</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>a</motion.span>
              <motion.span className='flex'  whileHover={{ y : -10}}>h</motion.span>
              </Link></div>
            <div className="flex flex-row justify-between items-center mt-4  gap-2">
                <Link  href={"/about"}>
                    About
                </Link>
                <Link href={"/contact"}>Blog</Link>
                <Link href={"/contact"}>Projects</Link>
                <Link className='flex flex-row gap-2 items-center' href={"https://github.com/aasim-shah"}>Github <RiExternalLinkLine size={18}/></Link>
                
            </div>
        </div>
        <div className="ml-auto sm:mr-6">
        <div>
      {theme && theme==="light" ? <button className='py-2 px-2 rounded-md bg-gray-100' onClick={()=>setTheme('dark')}>
        <motion.span 
        className='flex'
         transition={{ duration: 1}}
         initial={{rotate : -30}}
         animate={{
           rotate : theme === "light" ? 30 : 0
         }}>

        <BsMoonStarsFill color='#000' size={16}/>
        </motion.span>
      </button> : <button className='py-2 px-2 rounded-md bg-cyan-800' onClick={()=>setTheme('light')}>
      <motion.span 
        className='flex'
        transition={{ duration: 1 }}
        initial={{rotate : -30}}
        animate={{
          type : "easeOut" ,
          rotate : theme === "light" ? 30 : 0
        }}>
        <FiSun color='#fff' size={20}/>
           </motion.span>
      </button> }
    </div>
        </div>
        
   </div>  
   ) 
}

export default Header