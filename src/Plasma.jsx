import { memo } from 'react';

/**
 * Plasma – lightweight CSS replacement for the WebGL ray-marching shader.
 *
 * Achieves the same moody, animated indigo/purple gradient glow using only
 * CSS keyframe animations on two blurred radial-gradient orbs.
 * GPU cost: ~0 (opacity/transform only, fully composited).
 *
 * Props mirror the original to keep Hero.jsx unchanged:
 *   color, speed, scale, opacity  (direction & mouseInteractive ignored – not needed)
 */
const Plasma = memo(function Plasma({
    color = '#4f46e5',
    speed = 1,
    scale = 1,
    opacity = 0.5,
}) {
    // Map speed → CSS animation duration (slower speed = longer duration)
    const duration1 = (12 / (speed || 1)).toFixed(1);
    const duration2 = (18 / (speed || 1)).toFixed(1);

    // Convert scale to a size multiplier (larger = more spread)
    const sizePct = Math.round(55 * (scale || 1));

    return (
        <div
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            {/* Primary orb */}
            <div
                style={{
                    position: 'absolute',
                    width: `${sizePct}%`,
                    paddingBottom: `${sizePct}%`,
                    top: '10%',
                    left: '20%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${color}55 0%, ${color}00 70%)`,
                    filter: 'blur(60px)',
                    opacity,
                    animation: `plasma-drift-a ${duration1}s ease-in-out infinite alternate`,
                    willChange: 'transform',
                }}
            />
            {/* Secondary orb */}
            <div
                style={{
                    position: 'absolute',
                    width: `${Math.round(sizePct * 0.75)}%`,
                    paddingBottom: `${Math.round(sizePct * 0.75)}%`,
                    bottom: '10%',
                    right: '10%',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #7c3aed55 0%, #7c3aed00 70%)`,
                    filter: 'blur(80px)',
                    opacity: opacity * 0.7,
                    animation: `plasma-drift-b ${duration2}s ease-in-out infinite alternate`,
                    willChange: 'transform',
                }}
            />

            {/* Keyframes injected as a style tag — avoids a separate CSS file */}
            <style>{`
                @keyframes plasma-drift-a {
                    from { transform: translate(0px, 0px) scale(1); }
                    to   { transform: translate(40px, 30px) scale(1.08); }
                }
                @keyframes plasma-drift-b {
                    from { transform: translate(0px, 0px) scale(1); }
                    to   { transform: translate(-35px, -25px) scale(1.06); }
                }
            `}</style>
        </div>
    );
});

export default Plasma;
