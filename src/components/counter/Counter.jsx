import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);
            const easedProgress = easeOut(progress);

            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return <span ref={ref}>{count}</span>;
};

export default Counter;
