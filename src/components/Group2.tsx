import { useEffect } from 'react';
import { ReactComponent as Group2SVG } from '../assets/group2.svg';

function Group2() {
    useEffect(() => {
        animateScarlett();
    }, []);

    return <Group2SVG id="group2" />;
}

function animateScarlett() {
    const initialWait = 11.5 + (window.innerWidth <= 1130 ? 1.21 + 1.79 : 0);

    function animateUnpainted() {
        let timeline = new TimelineMax();
        timeline.add('begin');
        timeline
            .to('#scarlett-body-painted', 0, {
                x: -450,
            })
            .to('#scarlett-body-painted', initialWait, {})
            .to('#scarlett-body-painted', 4.5, {
                x: 0,
                ease: Linear.easeNone,
                onComplete: () => {
                    document.getElementById('scarlett-body-painted').style.display = 'none';
                },
            });
    }

    function animateFrontPanel() {
        let timeline = new TimelineMax();
        timeline.add('begin');
        timeline
            .to('#front-panel', 0, {
                scale: 0.5,
                transformOrigin: '50% 50%',
            })
            .to('#front-panel', initialWait, {})
            .to('#front-panel', 2, {})
            .to('#front-panel', 0.5, {
                scale: 1,
            })
            .to('#front-panel', 0.5, {})
            .to('#front-panel', 1, {
                y: 80,
            })
            .to('#front-panel', 0.5, {
                onComplete: () => {
                    document.getElementById('front-panel').style.display = 'none';
                },
            });
    }

    function animateFull() {
        let timeline = new TimelineMax();
        timeline.add('begin');
        timeline
            .to('#scarlett-full', 0, {
                display: 'none',
            })
            .to('#scarlett-full', initialWait, {})
            .to('#scarlett-full', 4.5, {})
            .to('#scarlett-full', 0, {
                display: 'block',
            })
            .to('#scarlett-full', 5, {
                x: 500,
                ease: Linear.easeNone,
            });
    }

    animateUnpainted();
    animateFrontPanel();
    animateFull();
}

export default Group2;
