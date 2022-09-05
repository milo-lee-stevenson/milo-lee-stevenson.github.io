const animate = () => {
    const protoAppleEl = document.getElementsByClassName('apple')[0];

    const x = window.innerWidth
    const y = document.documentElement.clientHeight

    Array.from({ length: 300 }).forEach((i) => {
        let cloneEl = protoAppleEl.cloneNode(true); 
        cloneEl.class = "apple";
        cloneEl.style.left = `${Math.random()*x}px`;
        cloneEl.style.width = `${(Math.random()*100)+50}px`;
        protoAppleEl.parentNode.appendChild(cloneEl);
    })

    const raining = anime({
        targets: '.apple',
        translateY: `${y}px`,
        rotateZ: 1200,
        easing: 'linear',
        duration: y * 3,
        loop: true,
        delay: anime.stagger(100, {start: 500}),
        autoplay: false,
    })

    const animation = anime({
        targets: '.uniform',
        translateX: 500,
        direction: 'alternate',
        rotate: '2turn',
        loop: 1,
        easing: 'linear',
        autoplay: false,
    });

    document.getElementById("uniform").addEventListener('click', animation.restart)

    document.getElementById("rain").addEventListener('click', raining.restart)
}

document.addEventListener('DOMContentLoaded', animate)