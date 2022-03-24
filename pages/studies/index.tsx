import Head from 'next/head';
import Link from 'next/link';
import ChapterContent from '../../components/ChapterContent';
import ChapterText from '../../components/ChapterText';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

export default function Studies() {
    return (
        <>
            <Head>
                <title>going to studies</title>
                <link rel="icon" href="/logos/favicon.ico" />

                <meta name="twitter:card" content="app" key="twcard" />
                <meta name="twitter:title" content="My journey beggins" key="twtitle" />

                <meta property="og:title" content="My journey beggins" key="ogtitle" />
                <meta
                    property="og:description"
                    content="Here is my story about how I started into programming."
                    key="ogdesc"
                />
                <meta property="og:image" content="/logos/android-chrome-512x512.png" key="ogimage" />
            </Head>
            <Navbar />
            <header className="mt-16 sm:mt-32">
                <HeroSection
                    main_text="Hi, I'm Alejandro... and this is my going to studies"
                    image_src="/images/studying.jpg"
                />
            </header>
            <ChapterContent>
                <ChapterText>
                    <p>
                        After acquiring a base in programming, I considered that I needed to study a career in relation
                        to the area I wanted to aspire to, which was computer science, both to have the title and to
                        enter in context with what I wanted to work.
                    </p>
                    <p>
                        I discovered an institute where I could study a short 2 year degree in informatics, I enrolled
                        and started studying there, I met friends that mean a lot to me today and I appreciate a lot as
                        well as life learning.
                    </p>
                    <p>
                        The programming skills that I cultivated in a self-taught way I haven&apos;t put into practice
                        much during that time and even though I have seen subjects where programming was involved, they
                        only teach the basic and essential part, even though in those 2 years I got an idea of what the
                        computer science area is, the time there was worth it in a way.
                    </p>
                </ChapterText>
                <br />
                <img className="mx-auto my-5" src="images/guy-coding.jpg" />
                <br />
                <ChapterText>
                    <p>
                        Already reaching the final stretch of my studies came the time to do the thesis as well as the
                        internship at that time, but here we talk about the project that I developed for my thesis, it
                        consists of a system developed in Laravel that conformed several CRUDs regarding the
                        registration of grades in a school.
                    </p>
                    <p>
                        Clearly for this I had to learn PHP, MySQL and the Laravel framework in advance, it has taken me
                        a maximum of 2 months to develop the project, that&apos;s how I lived the experience of what is
                        programming in projects for the first time, you will always find some detail that can give you
                        hours of frustration, but after making it work that frustration goes away as if nothing.
                    </p>
                    <p>
                        But in the future I would realize that at a professional level goes beyond that, I got a good
                        grade with the project and it has paid off, in the middle of that period I have also made
                        contact with a group of people which has been my entry into the world of development work.
                    </p>
                </ChapterText>
                <div className="flex justify-between mt-20">
                    <Link href="/sabbatical-year">
                        <a className="bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 py-3 px-6 text-white rounded-lg transition duration-150 ease-in-out">
                            {'<<'} Back
                        </a>
                    </Link>
                    <Link href="/now-a-professional">
                        <a className="bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 py-3 px-6 text-white rounded-lg transition duration-150 ease-in-out">
                            Next {'>>'}
                        </a>
                    </Link>
                </div>
            </ChapterContent>
            <footer className="mt-80">
                <Footer />
            </footer>
        </>
    );
}
