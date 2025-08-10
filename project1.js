
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            if (e.target.id === 'grey') {
                body.style.backgroundColor = 'green';
            } else if (e.target.id === 'blue') {
                body.style.backgroundColor = 'orange';
            }
        });
    });
   