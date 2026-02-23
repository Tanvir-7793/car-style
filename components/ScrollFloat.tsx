"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

interface ScrollFloatProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const ScrollFloat = ({ children, className = "", delay = 0 }: ScrollFloatProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98],
                        delay: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollFloat;
