import { gsap } from 'gsap';
import { useEffect } from 'react';

interface HeroSectionProps {
    main_text: string;
    image_src?: string;
}

export default function HeroSection({ main_text, image_src }: HeroSectionProps) {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from('.main_text', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.Out',
        });
        tl.from('.hero_img', {
            x: 70,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power1.Out',
        });
    });

    if (image_src) {
        return (
            <div className="max-w-5xl flex flex-col-reverse md:flex-row md:justify-between mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md lg:w-1/2 md:w-5/12 md:mr-10 pt-10 md:pt-24 lg:pt-32 mx-auto md:ml-5">
                    <h1 className="main_text font-mono text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">
                        {main_text}
                    </h1>
                </div>
                <div className="md:w-1/2 lg:pl-10">
                    <div className="relative h-72 lg:h-96 w-48 md:w-52 lg:w-64 mx-auto">
                        <img
                            className="hero_img absolute z-10 max-w-sm max-h-full w-48 lg:w-64 pb-5"
                            src={image_src}
                            alt=" "
                        />
                        <div className="absolute z-0 w-48 lg:w-64 mx-auto bg-gray-400 opacity-40 inset-y-0 mt-5 ml-5" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl flex flex-col-reverse md:flex-row md:justify-between mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md md:w-1/2 md:mr-10 pt-10 md:pt-16 mx-auto">
                <h1 className="main_text font-mono text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">
                    {main_text}
                </h1>
            </div>
            <div className="md:w-1/2 md:flex md:justify-end">
                <img
                    className="hero_img max-w-sm max-h-full mx-auto w-64 sm:w-80 h-auto"
                    src="/images/isometric-laptop.png"
                    alt=" "
                />
            </div>
        </div>
    );
}
