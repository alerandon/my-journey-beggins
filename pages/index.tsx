import Head from 'next/head';
import ChapterResume from '../components/ChapterResume';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';
import { Orientation } from '../enums/Orientation';

export default function Home() {
    const resumes = {
        sabbatical_year: {
            title: 'A sabbatical year, now what?',
            description:
                'I was finishing school, and the university where I aspired to pursue a career in Computer Science I could not be selected, since at that time it was only possible to enter through a selection filter that chose candidates in a very random way, but why is another story. At the end of the school stage, it was not clear what my definitive course would be, nor what the next one would be...',
        },
        studies: {
            title: 'Then... Going to studies',
            description:
                'After acquiring a base in programming, I considered that I needed to study a career in relation to the area I wanted to aspire to, which was computer science, both to have the title and to enter in context with what I wanted to work. I discovered an institute where I could study a short 2 year degree in informatics, I enrolled and started studying there...',
        },
        now_a_professional: {
            title: 'My start as a professional, here we go!',
            description:
                'I got in contact with a group of people thanks to a friend from when I was in school, he invited me to an induction workshop of the mentioned group, they were an organization composed of a foundation that taught young people practical skills for working in international projects and a company that played the role of a technology consulting firm that offered both technology and engineering solutions for companies and cities...',
        },
    };

    return (
        <>
            <Head>
                <title>my journey beggins</title>
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
            <header className="mt-16 sm:mt-40">
                <HeroSection main_text="Hi, I'm Alejandro... and this is my journey starting to learn programming" />
            </header>
            <main className="mt-44 md:mt-56">
                <section>
                    <Introduction />
                </section>
                <section className="mt-32">
                    <Quote />
                </section>
                <section className="mt-44 space-y-44">
                    <ChapterResume
                        orientation={Orientation.LeftToRight}
                        image_src="/images/thinking.jpg"
                        title={resumes.sabbatical_year.title}
                        description={resumes.sabbatical_year.description}
                        chapter_href="/sabbatical-year"
                    />
                    <ChapterResume
                        orientation={Orientation.RightToLeft}
                        image_src="/images/studying.jpg"
                        title={resumes.studies.title}
                        description={resumes.studies.description}
                        chapter_href="/studies"
                    />
                    <ChapterResume
                        orientation={Orientation.LeftToRight}
                        image_src="/images/working.jpg"
                        title={resumes.now_a_professional.title}
                        description={resumes.now_a_professional.description}
                        chapter_href="/now-a-professional"
                    />
                </section>
                <section className="mt-64">
                    <h2 className="font-mono text-3xl text-center">The adventure continues. Get up and go learning!</h2>
                </section>
            </main>
            <footer className="mt-80">
                <Footer />
            </footer>
        </>
    );
}
