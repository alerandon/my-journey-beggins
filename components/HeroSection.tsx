export default function HeroSection() {
    return (
        <div className="max-w-5xl flex flex-col-reverse md:flex-row md:justify-between mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md md:w-1/2 md:mr-10 pt-10 md:pt-20 mx-auto">
                <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">
                    Hi, I&apos;m Alejandro... and this is my journey starting to learn programming
                </h1>
            </div>
            <div className="md:w-1/2 md:flex md:justify-end">
                <img
                    className="max-w-sm max-h-full mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-auto lg:h-auto"
                    src="/images/isometric-laptop.png"
                    alt=" "
                />
            </div>
        </div>
    );
}
