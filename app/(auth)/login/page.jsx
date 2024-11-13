"use client"

import { Button } from "@nextui-org/react";
import { AuthCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page(){
    return(
        <main className="w-full flex justify-center items-center bg-white-300 md:p-24 p-10 min-h-screen">
            <section className="flex flex-col gap-3">
                <div>
                    <img className="h-20" src="/logo.png" alt="Logo" />
                </div>
                <div className="flex flex-col gap-3 bg-gray-400 md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
                    <h1 className="font-bold text-xl">Login With Email</h1>
                    <form className="flex flex-col gap-3">
                        <input 
                            placeholder="Enter Your Email"
                            type="email"
                            name="user-name" 
                            id="user-name"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <input 
                            placeholder="Enter Your Password"
                            type="password"
                            name="user-password"
                            id="user-password"
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <Button color="primary">Login</Button>
                    </form>
                    <div className="flex justify-between">
                        <Link href={`/sign-up`}>
                            <button className="font-semibold text-sm text-blue-800">
                                New? Create Account
                            </button>
                        </Link>
                        <Link href={`/forget-password`}>
                            <button className="font-semibold text-sm text-blue-800">
                                Forget Password?
                            </button>
                        </Link>
                    </div>
                    <hr />
                    <SignInWithGoogleComponent/>
                </div>
            </section>
        </main>
    );
}

function SignInWithGoogleComponent() {  
    const handleLogin = async () => {
        try {
            const user = await signInWithPopup(auth , new GoogleAuthProvider());
        } catch (error) {
            toast.error(error?.message);
        }
    }
    return <Button onClick={handleLogin}>Sign In With Google</Button>;
}