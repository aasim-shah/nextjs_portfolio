import Image from 'next/image'
import { useTheme } from 'next-themes'

function Herosection() {
    const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-col sm:flex-row w-10/12 mx-auto py-16 sm:items-center'>
        
        <div className="sm:w-6/12">
            <p className="text-lg font-black">
                Hey&apos; I am Aasim shah
            </p>
            <p className=" font-semibold mt-4">Welcome to my digital Garden ☘🥀</p>
            <p className=" font-semibold  mt-3">I am a software developer from Pakistan&apos; I make open-source projects webpages and native apps  and write about code&apos; design&apos; and life</p>
        </div>
        {theme && theme==="light" ?
        <Image  src={'/assets/1.jpg'} className='sm:ml-32 mt-3' width={350} height={350}/>
        :
        <Image  src={'/assets/dark_hero.png'} className='sm:ml-32 mt-3' width={270} height={270}/>
       }
    </div>
  )
}

export default Herosection