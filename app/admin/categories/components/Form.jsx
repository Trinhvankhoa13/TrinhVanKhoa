"use client";

import { createNewCategory } from "@/lib/firestore/categories/write";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
    const [data , setData] = useState(null);
    const [image , setImage] = useState(null);
    const [isLoading , setIsLoading] = useState(false);

    const handleData = (key , value)=>{
        setData((preData)=> {
            return{
                ...(preData ?? {}),
                [key] : value , 
            };
        });
    };
    const handleCreate = async () =>{
        setIsLoading(true);
        try {
            await createNewCategory({data:data, image:image});
            toast.success("Successfully Created");
            setData(null);
            setImage(null);
        } catch (error) {
            toast.error(error?.message);
        }
        setIsLoading(false);
    };

    return(
        <div className="flex flex-col gap-3 bg-white rounded-xl p-5 w-full md:w-[400px]">
            <h1 className="font-semibold">Create Category</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleCreate();
                    }
                } 
                className="flex flex-col gap-3"
                >
                <div className="flex flex-col gap-1">
                    <label htmlFor="category-name" className="text-gray-500 text-sm">
                        Image <span className="text-red-500">*</span>
                    </label>
                    {image && (
                        <div className="flex justify-center items-center p-3">
                            <img className="h-24" src={URL.createObjectURL(image)} alt=""/>
                        </div>
                    )}
                    <input 
                    onChange={(e)=>{
                        if(e.target.files.length > 0){
                            setImage(e.target.files[0]);
                        }
                    }}
                    id = "category-image"
                    name = "category-image"
                    type="file" 
                    className="border px-4 py-2 rounded-lg w-full focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category-name" className="text-gray-500 text-sm">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                    id = "category-name"
                    name = "category-name"
                    type="text" 
                    placeholder="Enter-name"
                    value={data?.name ?? ""}
                    onChange={(e)=>{
                        handleData("name" , e.target.value);
                    }}
                    className="border px-4 py-2 rounded-lg w-full focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category-slug" className="text-gray-500 text-sm">
                        Slug <span className="text-red-500">*</span>
                    </label>
                    <input 
                    id = "category-slug"
                    name = "category-slug"
                    type="text" 
                    placeholder="Enter-slug"
                    value={data?.slug ?? ""}
                    onChange={(e)=>{
                        handleData("slug" , e.target.value);
                    }}
                    className="border px-4 py-2 rounded-lg w-full focus:outline-none"
                    />
                </div>
                <Button isLoading = {isLoading} isDisabled = {isLoading} type="submit">
                    Create
                </Button>
            </form>
        </div>
    )
};
