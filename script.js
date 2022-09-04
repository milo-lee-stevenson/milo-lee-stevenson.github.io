document.addEventListener('DOMContentLoaded', function() {
    const animation = anime({
        targets: '.uniform',
        translateX: 250,
    });

    document.getElementById("animate").addEventListener('click', animation.restart)
})