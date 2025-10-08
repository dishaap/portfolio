import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LetterDisplay } from './LetterDisplay';

gsap.registerPlugin(ScrollTrigger);

export const LetterCollision: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const letters = ref.current.querySelectorAll<HTMLElement>('.letter');

        // Initial scramble animation
        letters.forEach(letter => {
            const speed = parseFloat(letter.dataset.speed || '1');
            gsap.fromTo(
                letter,
                { y: 0, rotation: 0 },
                {
                    y: (1 - speed) * window.innerHeight * 2,
                    rotation: Math.random() * 60 - 30,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        // Push letters off screen after About section
        gsap.to(ref.current, {
            y: -window.innerHeight,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <div ref={ref} className="scroll-smooth bg-black">
            <div className="title-section ml-3 min-h-screen flex flex-col justify-end">
                <div className="subtitle -mt-30 mb-8">
                    <span>HI! I AM DISHA :)</span>
                </div>
                <div className="title-text flex flex-wrap">
                    <LetterDisplay word="code" />
                    <div className="w-4 sm:w-10" />
                    <LetterDisplay word="is" />
                    <div className="w-4 sm:w-10" />
                    <LetterDisplay word="my" />
                </div>
                <div className="title-text flex flex-wrap">
                    <LetterDisplay word="canvas" className="title-alt-1" />
                    <div className="w-4 sm:w-10" />
                    <LetterDisplay word="for" />
                    <div className="title-text w-4 sm:w-10" />
                    <LetterDisplay word="creating" />
                </div>
                <div className="title-text flex flex-wrap">
                    <LetterDisplay word="with" />
                    <div className="w-4 sm:w-10" />
                    <LetterDisplay word="intention." className="title-alt-2"/>
                </div>

                <div className="ml-auto"><span className="scroll">
                    scroll{" "}
                    <i
                        className="las la-angle-double-down"
                        style={{ transform: "rotate(315deg)", fontWeight: "bolder" }}
                    ></i>
                </span></div>
            </div>
        </div>
    );
};
