addEventListener("mousemove", (event) => {
    console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);

    document.body.style.setProperty('--x', event.clientX + 'px');
    document.body.style.setProperty('--y', event.clientY + 'px');

});