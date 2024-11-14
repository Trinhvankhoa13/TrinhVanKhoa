"use client"
import Link from "next/link";

export default function Header(){
    const menuList = [
        {
            name:"Home",
            link:"/",
        },
        {
            name:"About Us",
            link:"/about-us",
        },
        {
            name:"Contact Us",
            link:"/contact-us",
        }
    ];
    return(
        <nav className="py-4 px-14 border-b flex items-center justify-between">
            <img className="h-12" src="/logo.png" alt="" />
            <div className="flex gap-4 items-center font-semibold">
                {menuList?.map((item)=>{
                    return <Link href={item?.link} key={item.link}>
                        <button>{item?.name}</button>
                    </Link>
                })}
            </div>
            <Link href={"/login"}>
                <button className="bg-black px-5 font-bold py-2 rounded-full text-white hover:bg-gray-400 hover:text-black">
                    Login
                </button>
            </Link>
        </nav>
    )
}