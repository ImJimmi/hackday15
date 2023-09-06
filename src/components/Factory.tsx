import { useEffect } from 'react';
import { ReactComponent as FactorySVG } from '../assets/factory.svg';

function animateConveyorBelt() {
    function rotate() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#cogs>path', 4, {
            rotation: 360,
            ease: Linear.easeNone,
            repeat: -1,
            transformOrigin: '50% 50%',
        });

        return timeline;
    }

    rotate();
}

function animateBlock() {
    function drop() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#block', 1, {
            y: 100,
            ease: 'bounce.out',
        });
    }

    function slide() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#block', 2.5, {
            x: 200,
            ease: Linear.easeNone,
        });

        timeline.delay(0.37);
    }

    drop();
    slide();
}

function Factory() {
    useEffect(() => {
        animateConveyorBelt();
        animateBlock();
    }, []);

    return <FactorySVG />;
}

export default Factory;
