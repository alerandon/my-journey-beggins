import Link from 'next/link';
import { Orientation } from '../enums/Orientation';

interface ChapterResumeProps {
    orientation: Orientation;
    image_src: string;
    title: string;
    description: string;
    chapter_href: string;
}

export default function ChapterResume({
    orientation,
    image_src,
    title,
    description,
    chapter_href,
}: ChapterResumeProps) {
    switch (orientation) {
        case Orientation.RightToLeft:
            return (
                <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto px-5">
                    <div className="flex flex-col justify-center mt-10 md:mt-0 md:mr-16 max-w-lg mx-auto space-y-10">
                        <h3 className="font-mono text-2xl lg:text-3xl text-center md:text-right">{title}</h3>
                        <p className="text-lg lg:text-xl md:text-right">{description}</p>
                        <div className="flex justify-center md:justify-end">
                            <Link href={chapter_href}>
                                <a className="bg-blue-600 focus:bg-blue-900 hover:bg-blue-900 py-3 px-5 text-white rounded-lg transition duration-150 ease-in-out">
                                    Read more
                                </a>
                            </Link>
                        </div>
                    </div>
                    <img className="w-52 md:w-72 mx-auto" src={image_src} alt=" " />
                </div>
            );
        case Orientation.LeftToRight:
        default:
            return (
                <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-5">
                    <img className="w-52 md:w-72 mx-auto" src={image_src} alt=" " />
                    <div className="flex flex-col justify-center mt-10 md:mt-0 md:ml-16 max-w-lg mx-auto space-y-10">
                        <h3 className="font-mono text-2xl lg:text-3xl text-center md:text-left">{title}</h3>
                        <p className="text-lg lg:text-xl">{description}</p>
                        <div className="flex justify-center md:justify-start">
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
