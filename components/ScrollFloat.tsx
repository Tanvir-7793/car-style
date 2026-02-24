"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: React.ReactNode;
    className?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

const ScrollFloat = ({
    children,
    className = "",
    animationDuration = 1,
    ease = 'back.inOut(2)',
    scrollStart = 'center bottom+=50%',
    scrollEnd = 'bottom bottom-=40%',
    stagger = 0.03,
}: ScrollFloatProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const childrenElements = el.children;
            if (childrenElements.length === 0) return;

            gsap.from(childrenElements, {
                scrollTrigger: {
                    trigger: el,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: true,
                },
                opacity: 0,
                y: 100,
                stagger: stagger,
                duration: animationDuration,
                ease: ease,
            });
        }, el);

        return () => ctx.revert();
    }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default ScrollFloat;
