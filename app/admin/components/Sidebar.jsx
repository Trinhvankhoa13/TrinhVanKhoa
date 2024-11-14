"use client";

import { Dog, Layers2, LayoutDashboard, LibraryBig, PackageOpen, ShoppingCart, Star, User } from "lucide-react";
import Link from "next/link";

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
    ]

    return(
        <section className="flex flex-col gap-3 border-r bg-blue-400 px-5 py-3 h-screen overflow-hidden md:w-[220px]">
            <div className="flex justify-center">
                 <img className="h-12" src="/logo.png" alt="" />
            </div>
            <ul className="flex-1 flex flex-col gap-3">
                {menuList?.map((item)=>{
                    return (
                        <Link href={item?.link}>
                            <li className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white">
                                {item?.icon}{item?.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </section>
    )
}