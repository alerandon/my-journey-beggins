import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
    useEffect(() => {
        gsap.from('.profile_img', {
            scrollTrigger: {
                trigger: '.profile_img',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            duration: 1,
            ease: 'expo.Out',
        });
        gsap.from('.intro_text', {
            scrollTrigger: {
                trigger: '.intro_text',
                toggleActions: 'play none none none',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.Out',
        });
    });

    return (
        <div className="max-w-4xl mx-auto">
            <img className="profile_img mx-auto w-32 h-32 md:w-auto md:h-auto" src="/images/profile-photo.png" />
            <div className="intro_text mt-10 mx-auto space-y-8 px-5">
                <p className="text-lg md:text-xl text-center">
                    Today I&apos;m a skilled developer who can make tasks and features by it’s own, accomplishing the
                    pursued objectives around a project, sounds nice and it gives good expectations about it at future,
                    but the beginning of this story is also interesting too.
                </p>
                <p className="text-lg md:text-xl text-center">
                    It started as if it were an uncertain stage in my life where I did not know my definitive course in
                    the midst of the situation nor did I know what it might bring me.
                </p>
                <p className="text-lg md:text-xl text-center">
                    Let me tell you a story of a guy who did crossed a mood of apathy to a stage of learning where it
                    opened a path in life.
                </p>
            </div>
        </div>
    );
}
