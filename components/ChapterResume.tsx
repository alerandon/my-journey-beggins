import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Orientation } from '../enums/Orientation';

gsap.registerPlugin(ScrollTrigger);

interface ChapterResumeProps {
    orientation: Orientation;
    image_src: string;
    title: string;
    description: string;
    chapter_href: string;
    chapter: string;
}

export default function ChapterResume({
    orientation,
    image_src,
    title,
    description,
    chapter_href,
    chapter,
}: ChapterResumeProps) {
    switch (orientation) {
        case Orientation.RightToLeft:
            useEffect(() => {
                gsap.from('.' + chapter + '_img', {
                    scrollTrigger: {
                        trigger: '.' + chapter,
                        toggleActions: 'restart reverse restart none',
                    },
                    x: 50,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power4.Out',
                });
                gsap.from('.' + chapter + '_text', {
                    scrollTrigger: {
                        trigger: '.' + chapter,
                        toggleActions: 'restart reverse restart none',
                    },
                    x: -50,
                    opacity: 0,
                    stagger: 0.5,
                    duration: 1.5,
                    delay: 1,
                    ease: 'power4.Out',
                });
            });

            return (
                <div className={`${chapter} flex flex-col-reverse md:flex-row max-w-5xl mx-auto px-5`}>
                    <div className="flex flex-col justify-center mt-10 md:mt-0 md:mr-16 max-w-lg mx-auto space-y-10">
                        <h3 className={`${chapter}_text font-mono text-2xl lg:text-3xl text-center md:text-right`}>
                            {title}
                        </h3>
                        <p className={`${chapter}_text text-lg lg:text-xl md:text-right`}>{description}</p>
                        <div className={`${chapter}_text flex justify-center md:justify-end`}>
                            <Link href={chapter_href}>
                                <a className="bg-blue-600 focus:bg-blue-900 hover:bg-blue-900 py-3 px-5 text-white rounded-lg transition duration-150 ease-in-out">
                                    Read more
                                </a>
                            </Link>
                        </div>
                    </div>
                    <img className={`${chapter}_img w-52 md:w-72 mx-auto`} src={image_src} alt=" " />
                </div>
            );
        case Orientation.LeftToRight:
        default:
            useEffect(() => {
                gsap.from('.' + chapter + '_img', {
                    scrollTrigger: {
                        trigger: '.' + chapter,
                        toggleActions: 'restart reverse restart none',
                    },
                    x: -50,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power4.Out',
                });
                gsap.from('.' + chapter + '_text', {
                    scrollTrigger: {
                        trigger: '.' + chapter,
                        toggleActions: 'restart reverse restart none',
                    },
                    x: 50,
                    opacity: 0,
                    stagger: 0.5,
                    duration: 1.5,
                    delay: 1,
                    ease: 'power4.Out',
                });
            });

            return (
                <div className={`${chapter} flex flex-col-reverse md:flex-row max-w-5xl mx-auto px-5`}>
                    <img className={`${chapter}_img w-52 md:w-72 mx-auto`} src={image_src} alt=" " />
                    <div className="flex flex-col justify-center mt-10 md:mt-0 md:ml-16 max-w-lg mx-auto space-y-10">
                        <h3 className={`${chapter}_text font-mono text-2xl lg:text-3xl text-center md:text-left`}>
                            {title}
                        </h3>
                        <p className={`${chapter}_text text-lg lg:text-xl`}>{description}</p>
                        <div className={`${chapter}_text flex justify-center md:justify-start`}>
                            <Link href={chapter_href}>
                                <a className="bg-blue-600 focus:bg-blue-900 hover:bg-blue-900 py-3 px-5 text-white rounded-lg transition duration-150 ease-in-out">
                                    Read more
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            );
    }
}
