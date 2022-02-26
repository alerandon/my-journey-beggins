import actualDate from '../helpers/Utils';

export default function Footer() {
    return (
        <div className="relative h-auto overflow-x-hidden bg-blue-600">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    <div className="px-5 py-2">
                        <a
                            href="#home"
                            className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline"
                        >
                            home
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            href="#sabbatical_year"
                            className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline"
                        >
                            sabbatical year
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            href="#studies"
                            className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline"
                        >
                            studies
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            href="#now_a_professional"
                            className="text-sm leading-6 tracking-widest font-medium text-gray-100 hover:underline"
                        >
                            now a professional
                        </a>
                    </div>
                </nav>
                {/* <div className="mt-8 flex justify-center space-x-5">
                    <a href="#" target="_blank">
                        <img src="#"  className="w-6 h-6" />
                    </a>
                </div> */}
                <div className="mt-8">
                    <p className="text-center text-sm leading-6 font-medium tracking-widest text-gray-100">
                        &copy; {actualDate().getFullYear()} Alejandro Randon. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
