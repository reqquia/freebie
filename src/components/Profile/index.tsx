import Image from 'next/image';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { LogOut, Settings, User } from 'lucide-react';

function Profile({ avatar }: { avatar: string }) {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-zinc-900'>
        <Image
          className='rounded-full w-10 h-10'
          src={avatar}
          width={200}
          height={50}
          alt='logo'
        />
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
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-zinc-200 hover:text-zinc-900'>
              <User size={20} /> Perfil
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-zinc-200 hover:text-zinc-900'>
              <Settings size={20} /> Configurações
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 font-[500] rounded-lg py-1.5 px-3 hover:bg-zinc-200 hover:text-zinc-900'>
              <LogOut size={20} /> Sair
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export default Profile;
