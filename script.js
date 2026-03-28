
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


var tl = gsap.timeline();

tl.to('.page1', {
    y: "100vh",
    scale: 0.6,
    duration: 0
});

tl.to('.page1', {
    y: "30vh",
    duration: 1,
    delay: 1
});

tl.to('.page1', {
    y: "0",
    rotate: -720,
    scale: 1,
    delay: 0.4,
    duration: 0.8
});


tl.call(() => {
    locoScroll.update();
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



window.addEventListener('DOMContentLoaded', () => {
    const warningMessage = document.getElementById('warningMessage');

    function checkWidth() {
        if (window.innerWidth < 1300) {
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }
    }

    
    checkWidth();

    
    window.addEventListener('resize', checkWidth);
});