import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {FiSun} from 'react-icons/fi'
import {BsMoonStarsFill} from 'react-icons/bs'
import {RiExternalLinkLine} from 'react-icons/ri'

import Link from 'next/link'

function Header() {
    const { theme, setTheme } = useTheme()
    const [currentTheme, setcurrentTheme] = useState("light")
    const updateTheme = (theme) =>{
        setTheme(theme)
        setcurrentTheme(theme)
    }
  return (
    <div className='dark:bg-cyan-900 pt-5 border-b-2 pb-2 border-gray-50 dark:border-cyan-800 sm:pt-12 flex flex-row justify-between px-3 sm:px-16'>
        <div className="sm:w-[30%] flex flex-col ">
            <div className="font-bold ml-2"><Link href={"/"}>Aasim shah</Link></div>
            <div className="flex flex-row justify-between items-center mt-4  ml-2 gap-2">
                <Link  href={"/about"}>
                    About
                </Link>
                <Link href={"/contact"}>Blog</Link>
                <Link href={"/contact"}>Projects</Link>
                <Link className='flex flex-row gap-2 items-center' href={"/github"}>Github <RiExternalLinkLine size={18}/></Link>
                
            </div>
        </div>
        <div className="ml-auto sm:mr-6">
        <div>
      {currentTheme && currentTheme==="light" ? <button className='py-2 px-2 rounded-md bg-gray-100' onClick={()=>updateTheme('dark')}>
        <BsMoonStarsFill color='#000' size={16}/>
      </button> : <button className='py-2 px-2 rounded-md bg-cyan-800' onClick={()=>updateTheme('light')}>
        <FiSun color='#fff' size={20}/>
      </button> }
    </div>
        </div>
        
   </div>  
   ) 
}

export default Header