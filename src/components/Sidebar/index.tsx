import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BadgeDollarSign,
  BarChartBig,
  Baseline,
  Bell,
  Bolt,
  Calculator,
  Calendar,
  CircleAlert,
  CircleUserRound,
  Clock,
  FolderOpenDot,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircleMore,
  NotebookPen,
  ShoppingCart,
  StickyNote,
  Users,
} from 'lucide-react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Sidebar: React.FC = () => {
  return (
    <div className='w-72 h-screen bg-gray-900 text-white flex flex-col'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <Link href='/dashboard' className='py-2'>
          <Image src='/logo.png' width={200} height={50} alt='logo' />
        </Link>
        <button className='p-2 hover:bg-zinc-200/20 rounded-full transition ease-in-out duration-300'>
          <Menu />
        </button>
      </div>
      <aside className='h-full overflow-y-auto px-5'>
        <ul className='flex flex-col gap-3 pb-5'>
          <li className='mb-2'>
            <h2 className='text-lg font-[600] text-purple-500'>Dashboard</h2>
            <p className='text-xs text-zinc-200'>
              {' '}
              Designs de painel exclusivos
            </p>
          </li>
          <li className='bg-zinc-200/20 rounded-lg px-4 py-3 flex gap-3 text-sm'>
            <FolderOpenDot size={20} /> General
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <BarChartBig size={20} /> Analytics
          </li>
          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3  flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <BadgeDollarSign size={20} /> Financeiro
          </li>

          <li className='mb-2'>
            <h2 className='text-lg font-[600] text-purple-500'>Aplicações</h2>
            <p className='text-xs text-zinc-200'>
              Projetos de aplicativos personalizados
            </p>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <ShoppingCart size={20} /> E-commerce
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Products
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Products Detail
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    New Product
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Orders
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Orders Detail
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex justify-between items-center gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <div className='flex gap-3'>
              <Mail size={20} /> E-mail
            </div>
            <span className='bg-purple-500 rounded-full items-center text-center w-5 h-5'>
              2
            </span>
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <Users size={20} /> Contatos
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <MessageCircleMore size={20} /> Chat
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <Calendar size={20} /> Calendário
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <NotebookPen size={20} /> Notas
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <CircleUserRound size={20} /> Perfil
          </li>

          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <Bell size={20} /> Notificação
          </li>

          <li className='mb-2'>
            <h2 className='text-lg font-[600] text-purple-500'>Páginas</h2>
            <p className='text-xs text-zinc-200'>
              Designs de páginas personalizados
            </p>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <LockKeyhole size={20} /> Autenticação
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Login
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Registrar
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Esqueceu a senha?
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Resetar a senha
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Confirnação
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <Clock size={20} /> Em breve
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Simples
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Complexo
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <CircleAlert size={20} /> Erro
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Manutenção
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    404
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    500
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <Calculator size={20} /> Fatura
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Compacto
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Moderno
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li className='mb-2'>
            <h2 className='text-lg font-[600] text-purple-500'>
              Interface do Usuário
            </h2>
            <p className='text-xs text-zinc-200'>
              Blocos de construção da UI e UX
            </p>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <LayoutDashboard size={20} /> Layouts de página
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Overview
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Página em branco
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className='group flex w-full items-center justify-between hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
                <span className='font-medium text-white group-data-[hover]:text-white/80 flex gap-3'>
                  <Bolt size={20} /> Icones
                </span>
                <ChevronDownIcon className='size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <ul className='flex flex-col py-2 text-sm'>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md transition ease-in-out duration-300 cursor-pointer'>
                    Lucide
                  </li>
                  <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-2 text-md  transition ease-in-out duration-300 cursor-pointer'>
                    Heroicons
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>
          </li>
          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <Baseline size={20} /> Tipografia
          </li>
          <li className='mb-2'>
            <h2 className='text-lg font-[600] text-purple-500'>HeadlessUI</h2>
            <p className='text-xs text-zinc-200'>Componentes Interativos</p>
          </li>
          <li className='hover:bg-zinc-200/20 hover:rounded-lg px-4 py-3 flex gap-3 text-sm transition ease-in-out duration-300 cursor-pointer'>
            <StickyNote size={20} /> Documentação
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
