window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#add8e6',
        '#f08080',
        '#fafad2',
        '#90ee90',
        '#ffb6c1',
        '#32cd32'
    ]

    // console.log(sounds[0]);

    // Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {

            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
            window.onclick = function (event) {
                if (event.target == sounds) {
                    sounds[index].currentTime = 0;
                    sounds[index].pause();
                    createBubbles(index);
                } //else {
                //     sounds[index].currentTime = 0;
                //     sounds[index].pause();
                //     // createBubbles(index);
                // }
            }
        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

    };
});

// Creat a function thats makes abubble