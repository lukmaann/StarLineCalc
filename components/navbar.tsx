"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import useStore from "@/store/languageStore"
import { cn } from "@/lib/utils"


const NavBar = () => {
    const {language,setLanguage}=useStore();
    return (
        <nav className="w-full border-b  border-b-gray-800 p-2 flex justify-start bg-black  border-white font-bold text-white items-center">
            <div className="flex w-full justify-between items-center">
            <Image src={"/starlinelogo.webp"} width={150} height={100} alt="logo" />
            <div className="flex">
                <Button className={cn(" rounded-none  h-5 p-1 px-2",language==='hindi' && "bg-yellow-500 hover:bg-yellow-500 text-black")} onClick={()=>setLanguage("hindi")}>Hin</Button>
                <Button className={cn(" rounded-none p-1 h-5 px-2",language==='english' && "bg-yellow-500 hover:bg-yellow-500 text-black")} onClick={()=>setLanguage("english")}>Eng</Button>
            


            </div>
          
            </div>
        </nav>
    )
}

export default NavBar