import Link from 'next/link';
import actualDate from '../helpers/Utils';

export default function Footer() {
    return (
        <div className="relative h-auto overflow-x-hidden bg-blue-600">
            <div className="max-w-screen-xl mx-auto py-10 px-4 space-y-6 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    <div className="px-5 py-2">
                        <Link href="/">
                            <a className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline">
                                home
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/sabbatical-year">
                            <a className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline">
                                sabbatical year
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/studies">
                            <a className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline">
                                studies
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/now-a-professional">
                            <a className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline">
                                now a professional
                            </a>
                        </Link>
                    </div>
                </nav>
                <div className="flex justify-center space-x-5">
                    <a href="https://github.com/alerandon" target="_blank" rel="noreferrer">
                        <img src="icons/github-white.svg" alt=" " className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-randon-334647127/" target="_blank" rel="noreferrer">
                        <img src="icons/linkedin-white.svg" alt=" " className="w-6 h-6" />
                    </a>
                </div>
                <div>
                    <p className="text-center text-sm leading-6 font-medium tracking-widest text-gray-100">
                        &copy; {actualDate().getFullYear()} Alejandro Randon. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
