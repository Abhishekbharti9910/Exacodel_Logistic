'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkIcon,
  HomeIcon,
  RocketLaunchIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  InboxIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { InboxStackIcon, TrashIcon } from '@heroicons/react/20/solid';
import UserProfile from '../../components/userprofile/UserProfile'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Inbox', href: '#', icon: InboxIcon, current: false },
  { name: 'AI Assistant', href: '#', icon: RocketLaunchIcon, current: false },
  { name: 'My Request', href: '#', icon: BookmarkIcon, current: false },
  { name: 'Bookings', href: '#', icon: PaperAirplaneIcon, current: false },
];
const teams = [
  { id: 1, name: 'Apps', href: '#', initial: 'A', current: false },
  { id: 2, name: 'LE Settings', href: '#', initial: 'LE', current: false },
  { id: 3, name: 'More', href: '#', initial: 'M', current: false },
];

const tags = [
  { id: 'all', name: 'All', href: '#', initial: 'A', color: 'bg-white', current: false },
  { id: 'red', name: 'Red', href: '#', initial: 'R', color: 'bg-rose-600', current: false },
  { id: 'blue', name: 'Blue', href: '#', initial: 'B', color: 'bg-sky-600', current: false },
  { id: 'green', name: 'Green', href: '#', initial: 'G', color: 'bg-green-600', current: false },
];

const mails = [
  { id: 'main', name: 'Main', href: '#', icon: InboxStackIcon, current: false },
  { id: 'trash', name: 'Trash', href: '#', icon: TrashIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MenuListing1 = ({ navArray, title }) => {
  return (
    <li>
      {title !== undefined ? (
        <div className="text-xs font-semibold leading-6 text-gray-400">
          {title}
        </div>
      ) : (
        ''
      )}
      <ul role="list" className="-mx-2 space-y-1">
        {navArray.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-indigo-600'
                    : 'text-gray-400 group-hover:text-indigo-600',
                  'h-6 w-6 shrink-0'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MenuListing2 = ({ navArray, title }) => {
  return (
    <li>
      <div className="text-xs font-semibold leading-6 text-gray-400">
        {title}
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {navArray.map((nav) => (
          <li key={nav.name}>
            <a
              href={nav.href}
              className={classNames(
                nav.current
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <span
                className={classNames(
                  nav.current
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                )}
              >
                {nav.initial}
              </span>
              <span className="truncate">{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MenuListing3 = ({ navArray, title }) => {
  return (
    <>
      <div className="text-xs font-semibold leading-6 text-gray-400 pt-5">
        {title}
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {navArray.map((nav) => (
          <li key={nav.name}>
            <a
              href={nav.href}
              className={classNames(
                nav.current
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <span
                className={classNames(
                  nav.current
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-600 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                  `flex h-6 w-6 text-gray-600 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium  ${nav.color}`
                )}
              >
                {nav.initial}
              </span>
              <span className="truncate">{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? 'text-indigo-600'
                                        : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Overviews
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-indigo-600 border-indigo-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <MenuListing1 navArray={navigation} />
                <MenuListing2 navArray={teams} title="overview" />
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="lg:pl-32">
          <div className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              {/* Main area */}
              <form className="relative flex w-full flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-12 w-full shadow-md border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <UserProfile />
            </div>
          </div>
        </main>

        <aside className="fixed inset-y-0 left-72 hidden w-60 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block list-none">
          <MenuListing1 navArray={mails} title="mailboxes" />
          <MenuListing3 navArray={tags} title="Tags" />
        </aside>
      </div>
    </>
  );
}