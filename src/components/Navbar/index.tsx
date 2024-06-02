import { BellDot, MessageSquareDot, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Flags from '../Flags';
import Profile from '../Profile';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full bg-white text-zinc-900 p-4 shadow'>
      <div className='flex justify-between items-center'>
        <div>
          <Search />
        </div>
        <div className='flex justify-end items-center gap-4'>
          <Flags />
          <MessageSquareDot />
          <BellDot />

          <div className='flex items-center gap-2'>
            <div className='text-end'>
              <h1 className='text-[14px] text-zinc-900 font-[600] mb-0 leading-normal'>
                Lucas Réquia
              </h1>
              <p className='text-xs text-zinc-400 leading-normal'>Admin</p>
            </div>
            <Profile avatar={'/avatar.png'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
