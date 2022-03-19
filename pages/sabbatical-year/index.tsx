import Head from 'next/head';
import Link from 'next/link';
import ChapterContent from '../../components/ChapterContent';
import ChapterText from '../../components/ChapterText';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

export default function SabbaticalYear() {
    return (
        <>
            <Head>
                <title>a sabbatical year</title>
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
                    main_text="Hi, I'm Alejandro... and this is my sabbatical year"
                    image_src="/images/thinking.jpg"
                />
            </header>
            <ChapterContent>
                <ChapterText>
                    <p>
                        I was finishing school, and the university I aspired to attend to study Computer Science, I
                        could not be selected, because at that time you could only enter through a selection filter
                        which chose the candidates very randomly, but why is a different story.
                    </p>
                    <br />
                    <p>
                        After finishing the school stage it was not clear my definitive course or what was going to be
                        next, and in my family there have been plans thought that remained in the expectation of seeing
                        if they could be achieved, but at the moment of truth that was not certain.
                    </p>
                    <br />
                    <p>
                        At the beginning I have been very attentive to do a series of procedures that were necessary for
                        the said family plans, after finishing those procedures at a dizzying pace I had nothing left to
                        do but to wait for things to happen with nothing else to do.
                    </p>
                    <br />
                    <p>
                        Of course my brother in the midst of that has insisted me to do something, one of those things
                        has been to learn programming and make a living from it, I was reluctant against the insistence,
                        until I reached the point where I decided to see the HTML language and how it was, and there I
                        discovered the site{' '}
                        <a
                            className="underline text-blue-500 hover:text-blue-700"
                            target="_blank"
                            href="https://www.w3schools.com/"
                            rel="noreferrer"
                        >
                            https://www.w3schools.com/
                        </a>
                        , has good tutorials I recommend them, at least if you see written tutorials, and if not, you
                        can look for video tutorials that there are plenty out there on the internet hehe...
                    </p>
                </ChapterText>
                <br />
                <section className="my-8">
                    <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 lg:space-x-5 justify-center">
                        <img className="max-w-sm mx-auto w-64 sm:w-72 lg:w-1/2 sm:w-auto" src="images/w3-before.jpg" />
                        <img className="max-w-sm mx-auto w-64 sm:w-72 lg:w-1/2 sm:w-auto" src="images/w3-after.jpg" />
                    </div>
                    <p className="text-gray-500 text-sm text-center mt-2">w3schools in 2017 / w3schools actually</p>
                </section>
                <br />
                <ChapterText>
                    <p>
                        And right here I discovered the w3schools site and started my learning path on this page, at the
                        beginning was learning HTML and its different tags and what function each one exerted, of course
                        I put into practice almost everything I saw step by step, I even started practicing with
                        anything writing everything in notepad, then I continued learning pure CSS, clearly it was going
                        to feel different than learning tags that open and close (I&apos;m talking about HTML of
                        course), however it broadened even more my skills of what I could invent in code, CSS itself has
                        been a key language for the aesthetics of web pages.
                    </p>
                    <br />
                    <p>
                        Later we went on to learn Javascript, it was clearly the first programming language I learned in
                        these beginnings, at first there were things that I did not understand how they were done, but
                        with practice began to leave me a clear vision of how to write code.
                    </p>
                    <br />
                    <p>
                        After learning Javascript I started to open my horizons to different programming languages,
                        mainly C language, thanks to C I have learned good basics of what a programming language is
                        about and its present qualities, I recommend starting from there if you want to start having a
                        base in programming.
                    </p>
                </ChapterText>
                <div className="flex flex-row-reverse mt-32">
                    <Link href="/studies">
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
