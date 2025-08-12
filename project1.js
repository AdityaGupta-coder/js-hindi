
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    buttons.forEach(function (button) {
        button.addEventListener('click', function(e) {
            if (e.target.id === 'grey') {
                body.style.backgroundColor = 'green';
            } if(e.target.id === 'blue') {
                body.style.backgroundColor = 'orange';
            }
            if(e.target.id === 'white') {
                body.style.backgroundColor = 'black';
            }
            if(e.target.id === 'yellow') {
                body.style.backgroundColor = 'pink';
            }
        });
    });
   