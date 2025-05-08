/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../helpers/Utils';

export default function Navbar() {
    const router = useRouter();

    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-8">
                        <div className="flex justify-between sm:block">
                            <div className="flex sm:justify-between items-center">
                                <div className="flex-shrink-0 flex items-center text-lg font-medium text-gray-500">
                                    my journey begins
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link href="/">
                                        <a
                                            className={classNames(
                                                router.pathname === '/'
                                                    ? 'text-blue-600 font-semibold'
                                                    : 'text-gray-700 hover:text-blue-600',
                                                'inline-flex items-center text-sm',
                                            )}
                                        >
                                            home
                                        </a>
                                    </Link>
                                    <Link href="/sabbatical-year">
                                        <a
                                            className={classNames(
                                                router.pathname === '/sabbatical-year'
                                                    ? 'text-blue-600 font-semibold'
                                                    : 'text-gray-700 hover:text-blue-600',
                                                'inline-flex items-center text-sm',
                                            )}
                                        >
                                            sabbatical year
                                        </a>
                                    </Link>
                                    <Link href="/studies">
                                        <a
                                            className={classNames(
                                                router.pathname === '/studies'
                                                    ? 'text-blue-600 font-semibold'
                                                    : 'text-gray-700 hover:text-blue-600',
                                                'inline-flex items-center text-sm',
                                            )}
                                        >
                                            studies
                                        </a>
                                    </Link>
                                    <Link href="/now-a-professional">
                                        <a
                                            className={classNames(
                                                router.pathname === '/now-a-professional'
                                                    ? 'text-blue-600 font-semibold'
                                                    : 'text-gray-700 hover:text-blue-600',
                                                'inline-flex items-center text-sm',
                                            )}
                                        >
                                            now a professional
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                sabbatical year
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                studies
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                now a professional
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
