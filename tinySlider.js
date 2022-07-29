var slider = tns({
    container: ".my-slider",
    loop: true,

    mouseDrag: true, // use mouse to drag slider
    items: 3, //  dont set width if u want to use this option (this looks a little broken to me so don't change it too much )
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2,
        },
        700: {
            gutter: 30,
        },
        900: {
            items: 3,
            gutter: 30,
        },
    },
    swipeAngle: true,
    speed: 100,
    rewind: true,
    center: true, // will keep first slide in center
    fixedWidth: 400, // sets width of container use this one instead in css
    gutter: 30,
    arrowKeys: true,
});
