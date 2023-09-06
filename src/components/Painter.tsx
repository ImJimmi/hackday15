import { useEffect } from 'react';
import { ReactComponent as PainterSVG } from '../assets/painter.svg';

function Painter() {
    useEffect(() => {
        animateScarlettBodyUnpainted();
    }, []);

    return <PainterSVG id="painter" />;
}

export default Painter;

function animateScarlettBodyUnpainted() {
    const input = document.getElementById('scarlett-body-input');
    input.style.display = 'none';

    const output = document.getElementById('scarlett-body-output');
    output.style.opacity = '0';

    const clouds = document.getElementById('clouds');
    clouds.style.opacity = '0';

    let timeline = new TimelineMax();
    timeline.add('begin');
    timeline
        .to('#scarlett-body-input', 6.74, {
            x: -200,
            onComplete: () => {
                input.style.display = 'block';
            },
        })
        .to('#scarlett-body-input', 2, {
            x: 0,
            ease: Linear.easeNone,
        });

    const isVertical = window.innerWidth <= 1130;

    if (isVertical) {
        timeline = timeline
            .to('#scarlett-body-input', 1.21, {
                y: 121,
                ease: Linear.easeNone,
            })
            .to('#clouds', 0, {
                y: 121,
            })
            .to('#scarlett-body-output', 0, {
                y: 121,
            });
    }

    timeline = timeline
        .to('#clouds', 1, {
            opacity: 1,
            ease: 'power1.out',
        })
        .to(
            '#clouds>path',
            1,
            {
                rotation: 360,
                ease: Linear.easeNone,
                transformOrigin: '50% 50%',
            },
            '<',
        )
        .to('#scarlett-body-output', 1.5, {
            opacity: 1,
            onComplete: () => {
                input.style.display = 'none';
            },
        })
        .to(
            '#clouds',
            1.5,
            {
                opacity: 0,
                ease: 'power1.in',
            },
            '<',
        );

    if (isVertical) {
        timeline = timeline
            .to('#scarlett-body-output', 1.79, {
                y: 300,
                ease: Linear.easeNone,
            })
            .to('#scarlett-body-output', 2, {
                x: -200,
                ease: Linear.easeNone,
            });
    } else {
        timeline = timeline.to('#scarlett-body-output', 2, {
            x: 200,
            ease: Linear.easeNone,
        });
    }
}
