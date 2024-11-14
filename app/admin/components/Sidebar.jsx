"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { Dog, Layers2, LayoutDashboard, LibraryBig, LogOut, PackageOpen, ShieldCheck, ShoppingCart, Star, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Sidebar(){
    const menuList = [
        {
            name : "Dashboard",
            link :  "/admin",
            icon :  <LayoutDashboard className="h-5 w-5" />,
        },
        {
            name : "Products",
            link :  "/admin/products",
            icon :  <PackageOpen className="h-5 w-5" />,
        },
        {
            name : "Categories",
            link :  "/admin/categories",
            icon : <Layers2 className="h-5 w-5" />,
        },
        {
            name : "Brand",
            link :  "/admin/brand",
            icon : <Dog className="h-5 w-5" />,
        },
        {
            name : "Orders",
            link :  "/admin/orders",
            icon : <ShoppingCart className="h-5 w-5" />,
        },
        {
            name : "Customers",
            link :  "/admin/customers",
            icon : <User className="h-5 w-5" />,
        },
        {
            name :  "Reviews",
            link :  "/admin/reviews",
            icon : <Star className="h-5 w-5" />,
        },
        {
            name : "Collections",
            link :  "/admin/collections",
            icon : <LibraryBig className="h-5 w-5" />,
        },
        {
            name : "Admins",
            link :  "/admin/admins",
            icon : <ShieldCheck className="h-5 w-5" />,
        },
    ]

    return(
        <section className="flex flex-col gap-3 border-r bg-blue-400 px-5 py-3 h-screen overflow-hidden md:w-[220px]">
            <div className="flex justify-center">
                 <img className="h-12" src="/logo.png" alt="" />
            </div>
            <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-3">
                {menuList?.map((item , key)=>{
                    return (
                        <Tab item={item} key={key}/>
                    );
                })}
            </ul>
            <div className="flex justify-center">
                <button onClick={async()=> 
                    {
                        try {
                            await toast.promise(signOut(auth),{
                                error : (e) => e?.message,
                                loading : "Loading...",
                                success : "Successfully Logged out",
                            })
                        } catch (error) {
                            toast.error(error?.message);
                        }
                    }
                } className="flex gap-2 items-center px-4 py-2 
                                    rounded-xl bg-black text-white w-full 
                                    hover:bg-red-600 transition-colors duration-300
                                    justify-center">
                    <LogOut className="h-5 w-5" />Logout
                </button>
            </div>
        </section>
    )
}

function Tab({item}) {
    const pathname = usePathname();
    const isSelected = pathname === item?.link;
    return (
        <Link href={item?.link}>
                <li className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white 
                                ease-soft-spring transition-all duration-300
                    ${isSelected ? "bg-black text-black" : "bg-black text-black"}
                    hover:bg-gray-500 hover:text-white transition-colors duration-300`}
                >
                     {item?.icon}{item?.name}
                 </li>
        </Link>
    )
}