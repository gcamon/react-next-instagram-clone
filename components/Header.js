import React from 'react';
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    HeartIcon,
} from '@heroicons/react/outline';

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [open,setOpen] = useRecoilState(modalState);

    return (
    <div className='shadow-sm bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
            
            <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24'>
                <Image src="https://links.papareact.com/ocw" 
                layout="fill" objectFit='contain'/>
            </div>
            <div  onClick={() => router.push('/')} className='relative lg:hidden w-10 flex-shrink-0'>
                <Image src="https://links.papareact.com/jjm" 
                layout="fill" objectFit='contain'/>
            </div>
            
            <div className='max-w-xs'>
                <div className='mt-1 relative p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500 '/>
                    </div>
                    <input type="text" placeholder='Search' 
                    className='bg-gray-50 
                    block w-full pl-10 sm:text-sm 
                    border-gray-300 rounded-md 
                    focus:ring-black focus:border-black' />
                </div>
            </div>
            
            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon  onClick={() => router.push('/')} className='navBtn '/>
                <MenuIcon className='h-6 md:hidden'/>

                {session ? (
                <>
                    <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn rotate-45' />
                    <div className='absolute -top-3 -right-2 text-sm w-5 
                        h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                    </div>
                    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img 
                        onClick={signOut}
                        src={session?.user.image}
                        alt="profile pic"
                        className='h-10 w-10 rounded-full cursor-pointer' 
                    />
                 </>
                ) : (
                    <button onClick={signIn}>Sign In</button>
                )}
               
            </div>
            
        </div>
    </div>
  );
};

export default Header;
