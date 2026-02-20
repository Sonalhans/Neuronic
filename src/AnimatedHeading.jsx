import React, { useEffect, useRef, useState, memo } from 'react';

const AnimatedHeading = memo(function AnimatedHeading({
    children,
    tag = 'h2',
    className = '',
    delay = 0,
    threshold = 0.2,
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el); // fire once
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const Tag = tag;

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </Tag>
    );
});

export default AnimatedHeading;
