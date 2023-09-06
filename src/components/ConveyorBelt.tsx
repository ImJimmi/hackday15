import { useEffect } from 'react';
import { ReactComponent as ConveyorBeltSVG } from '../assets/conveyor-belt.svg';

function ConveyorBelt() {
    useEffect(() => {
        function rotate() {
            const tl = new TimelineMax();

            tl.add('begin');
            tl.to('.Cog', 4, {
                rotation: 360,
                ease: Linear.easeNone,
                repeat: -1,
                transformOrigin: '50% 50%',
            });

            return tl;
        }

        const repeat = new TimelineMax();
        repeat.add(rotate());
    }, []);

    return <ConveyorBeltSVG />;
}

export default ConveyorBelt;
