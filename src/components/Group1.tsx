import { useEffect } from 'react';
import { ReactComponent as Group1SVG } from '../assets/group1.svg';
import animateConveyorBelt from './conveyor-belt';

function Group1() {
    useEffect(() => {
        animateConveyorBelt();
        animateBlock();
        animatePress();
        animateScarlettBodyUnpainted();
    }, []);

    return <Group1SVG />;
}

export default Group1;

function animateBlock() {
    function drop() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#block', 2, {
            y: 250,
            ease: 'bounce.out',
        });
    }

    function slide() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#block', 3, {
            x: 300,
            ease: Linear.easeNone,
            onComplete: () => {
                const block = document.getElementById('block');
                block.style.display = 'none';
            },
        });

        timeline.delay(0.74);
    }

    drop();
    slide();
}

function animatePress() {
    const timeline = new TimelineMax();

    timeline.add('begin');
    timeline
        .to('#press1', 0.15, {
            y: 100,
            ease: 'power1.out',
        })
        .to('#press1', 0.2, {
            y: 0,
            ease: 'power1.in',
        });
    timeline.delay(3.7);
}

function animateScarlettBodyUnpainted() {
    const body = document.getElementById('scarlett-body-unpainted');
    body.style.display = 'none';

    const timeline = new TimelineMax();

    timeline.add('begin');
    timeline
        .to('#scarlett-body-unpainted', 3.74, {
            onComplete: () => {
                body.style.display = 'block';
            },
        })
        .to('#scarlett-body-unpainted', 5, {
            x: 500,
            ease: Linear.easeNone,
        });
}
