import React from 'react';
import Flag from 'react-world-flags';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/16/solid';

const Flags: React.FC = () => {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-zinc-900'>
        <Flag code='bra' height='16' />
        <ChevronDownIcon className='size-4 fill-zinc-900' />
      </MenuButton>
      <Transition
        enter='transition ease-out duration-75'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <MenuItems
          anchor='bottom end'
          className='w-40 origin-top-right rounded-xl border bg-white p-1 text-sm/6 
          text-zinc-900 [--anchor-gap:var(--spacing-1)] focus:outline-none'
        >
          <MenuItem>
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-purple-300 hover:text-zinc-900'>
              <Flag code='bra' height='25' width='25' />
              Português BR
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-purple-300 hover:text-zinc-900'>
              <Flag code='us' height='25' width='25' />
              Inglês
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-purple-300 hover:text-zinc-900'>
              <Flag code='es' height='25' width='25' />
              Espanhol
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Flags;
