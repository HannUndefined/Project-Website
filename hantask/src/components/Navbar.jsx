import { useState } from "react"

function Navbar() {
  const [Open, setOpen] = useState(false)

  return (
    <div className='fixed h-20 bg-blue-500 w-screen flex justify-between items-center shadow-md z-50'>
        <div className="h-full w-full bg-gunmetal flex justify-between items-center p-5 px-5 z-50">
            
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.16666 6.29167C5.16666 3.53025 7.40523 1.29167 10.1667 1.29167H10.3333V29.2917C10.3333 30.9485 8.99018 32.2917 7.33332 32.2917H5.16666V6.29167Z" fill="#D9D9D9" className="hover:fill-verdigris z-0 hover:z-40 hover:scale-105 duration-300 transition-all"/>
            <path d="M24.5417 3C24.5417 1.34314 25.8848 0 27.5417 0H31V25.8333C31 29.4002 28.1085 32.2917 24.5417 32.2917V32.2917V3Z" fill="#D9D9D9" className="hover:fill-verdigris z-0 hover:z-40 hover:scale-105 duration-300 transition-all"/>
            <path d="M0 20.6667L0 18.5C0 16.8432 1.34315 15.5 3 15.5H23.25V20.6667H0Z" fill="#D9D9D9" className="hover:fill-verdigris z-0 hover:z-40 hover:scale-105 duration-300 transition-all"/>
        </svg>


            <svg width="30" height="30" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden" onClick={() => setOpen(!Open)}>
                <rect width="30" height="5" fill="#D9D9D9" className={`${ Open ? 'rotate-45 translate-x-1' : ''} transition-all duration-300`}/>
                <rect y="13" width="30" height="5" fill="#D9D9D9" className={`${ Open ? ' -translate-x-2 translate-y-3 -rotate-45' : ''} transition-all duration-300`}/>
            </svg>
        </div>
        <div className={` ${ Open ? 'top-20' : '-top-56'} flex absolute left-0 md:top-0 transition-all duration-500 z-10 pb-5 px-5 bg-blue-500 w-full text-base md:text-lg md:pb-0 md:w-max md:h-full md:bg-transparent md:relative md:flex-row flex-col text-magnolia font-montserrat gap-5 items-center font-medium shadow-md md:shadow-none`}>
            <a href="#home" className="hover:text-verdigris hover:scale-105 duration-300 transition-all">Home</a>
            <a href="#skill" className="hover:text-verdigris hover:scale-105 duration-300 transition-all">Skill</a>
            <a href="#education" className="hover:text-verdigris hover:scale-105 duration-300 transition-all">Education</a>
            <a href="#" className="hover:text-verdigris hover:scale-105 duration-300 transition-all">Project</a>
            <a href="#" className="hover:text-verdigris hover:scale-105 duration-300 transition-all">Contact</a>
        </div>
    </div>
  )
}

export default Navbar