'use client'
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Navbar() {

const [isShown, setIsShown] = useState(false);
  
    function toggleMenu(){
        setIsShown(!isShown)
    }

    useEffect(() => {
        function handleResize(){
            setIsShown(false)
        }
        window.addEventListener('resize', handleResize)
        return(() => window.removeEventListener('resize', handleResize))
    }, [])
    
    return (
        <nav className="relative bg-neutral-500 text-white flex justify-between items-center shadow-lg p-2">
            <div>
                <Link href="/"><i className="bx bx-paper-plane text-3xl text-yellow-500" /><span className="text-3xl uppercase text-white">iblog</span></Link>
            </div>
            <div className={clsx(
                "fixed  top-0 left-0 bg-linear-to-b from-amber-200 via-slate-500 to-neutral-200 h-screen",
                "w-[250px] md:bg-none md:w-auto md:static md:h-auto transition duration-300 ease-in md:translate-x-0 md:transition-none",
                {
                    "translate-x-0" : isShown,
                    "-translate-x-full": !isShown
                }
            )}>
                <Link className="block p-3 text-xl text-black md:inline md:p-1 md:text-base transition delay-150 duration-300 hover:bg-cyan-500 hover:text-white md:text-white" href="/posts">Post</Link>
                <Link className="block p-3 text-xl text-black md:inline md:p1 md:text-base transition delay-150 duration-300 hover:bg-cyan-500 hover:text-white md:text-white" href="/about">About</Link>
            </div>
            <div onClick={toggleMenu} className="md:hidden w-[30px] h-[20px] flex flex-col justify-between cursor-pointer z-5">
                <span className="w-full bg-black h-[3px]"></span>
                <span className="w-full bg-black h-[3px]"></span>
                <span className="w-full bg-black h-[3px]"></span>
            </div>
        </nav>
    )
}