import Image from 'next/image'
import { useTheme } from 'next-themes'

import { motion, transform, useScroll } from "framer-motion"

function Herosection() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-col sm:flex-row w-10/12 mx-auto py-16 sm:items-center'>

      <div className="sm:w-6/12">
      <motion.div
      initial={{x : 30}}
      transition={{
        type : "spring",
        stiffness : 70,
      }}
      whileInView={{x : 0}}
      >

          <p className="text-lg font-black">
            Hey&apos; I am Aasim shah
          </p>
    </motion.div>
    <motion.div
      initial={{opacity : 0.1}}
      transition={{
        type : "tween",
        delay : .5,
        duration : 2
      }}
      whileInView={{opacity : 1 }}
      >
          <p className=" font-semibold mt-4">Welcome to my digital Garden ☘🥀</p>
          <p className=" font-semibold  mt-3">I am a software developer from Pakistan&apos; I make open-source projects webpages and native apps  and write about code&apos; design&apos; and life</p>
      </motion.div>
      </div>
     <motion.div
      initial={{x : -10}}
      transition={{
        type : "spring",
        stiffness : 70,
      }}
      whileInView={{x : 10}}
     >
     {theme && theme === "light" ?
       
       <Image src={'/assets/1.jpg'} className='sm:ml-32 mt-3 mx-auto' width={350} height={350} />
      :
      <Image src={'/assets/dark_hero.png'} className='sm:ml-36 mt-3 mx-auto' width={270} height={270} />
    }
     </motion.div>
    </div>
  )
}

export default Herosection