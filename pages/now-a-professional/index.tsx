import Head from 'next/head';
import Footer from '../../components/Footer';
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
            <footer className="mt-80">
                <Footer />
            </footer>
        </>
    );
}
