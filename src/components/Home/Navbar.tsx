'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className="hidden h-[200px] w-full  md:flex lg:flex lg:flex-col justify-center items-center hover:cursor-pointer">
            <Image
                alt="logo"
                src={logo}
                width={1600}
                height={1000}
                onClick={() => router.push("/home")}
                className="h-[150px] w-[180px]"
            />
            <div className="h-[50px] w-full flex justify-center items-center">
                <ul className='h-full w-[50%] flex justify-between items-center shadow-md p-2 rounded-xl'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
