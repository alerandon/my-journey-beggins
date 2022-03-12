import Head from 'next/head';
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
            <footer className="mt-80">
                <Footer />
            </footer>
        </>
    );
}
