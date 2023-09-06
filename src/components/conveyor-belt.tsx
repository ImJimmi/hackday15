function animateConveyorBelt() {
    function rotate() {
        const timeline = new TimelineMax();

        timeline.add('begin');
        timeline.to('#cogs>path', 3, {
            rotation: 360,
            ease: Linear.easeNone,
            repeat: -1,
            transformOrigin: '50% 50%',
        });

        return timeline;
    }

    rotate();
}

export default animateConveyorBelt;
