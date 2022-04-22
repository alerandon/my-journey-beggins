import Head from 'next/head';
import Link from 'next/link';
import ChapterContent from '../../components/ChapterContent';
import ChapterText from '../../components/ChapterText';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

export default function NowAProfessional() {
    return (
        <>
            <Head>
                <title>my start as a professional</title>
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
                    main_text="Hi, I'm Alejandro... and this is my start as a professional"
                    image_src="/images/working.jpg"
                />
            </header>
            <ChapterContent>
                <ChapterText>
                    <p>
                        I got in contact with a group of people thanks to a friend from when I was in school, he invited
                        me to an induction workshop of the mentioned group, they were an organization composed of a
                        foundation that taught young people practical skills for working on international projects and a
                        company that exercised the role of a technology consulting firm that offered both technology and
                        engineering solutions for companies and cities.
                    </p>
                    <p>
                        Thanks to this group was that I began to see fully what is programming taken to a professional
                        level and as I was introduced to them I began to improve my skills and practices in development,
                        even to be taken into account to work with them.
                    </p>
                    <p>
                        This phase passed in a way never thought, only a month would pass with the organization before
                        there was a breaking point in the same due to differences between the two partners which caused
                        them to separate each one on their own, a group of us who were at that time we went with the
                        partner who wanted to look for things to work, he decided to start his own company and we
                        accompanied him in his beginning.
                    </p>
                    <p>
                        Although the pandemic began just when we were starting the first year was rough and we started
                        with the left foot, and then over time began to emerge projects and new jobs to do.
                    </p>
                </ChapterText>
                <br />
                <div className="mt-24 mb-12">
                    <p className="text-center font-mono text-2xl">and this is just the beginning...</p>
                    <img className="mx-auto my-5" src="images/railroad.jpg" alt=" " />
                </div>
                <br />
                <ChapterText>
                    <p>
                        The road does not end and just goes on and on, everything told here has been just the beginning,
                        programming is continuous learning and requires the discipline of the one who exercises this
                        profession, it is a job that challenges and tests you in various aspects on a personal level.
                    </p>
                    <p>
                        Even knowing the bad things about programming, it still seems to me one of the best jobs of all,
                        if not the best of all.
                    </p>
                    <p>
                        If you are passionate about this area do not think twice and start doing something, either
                        tutorials or something you want to create, skills are acquired in the doing.
                    </p>
                </ChapterText>
                <div className="flex mt-20">
                    <Link href="/studies">
                        <a className="bg-blue-500 focus:bg-blue-700 hover:bg-blue-700 py-3 px-6 text-white rounded-lg transition duration-150 ease-in-out">
                            {'<<'} Back
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
