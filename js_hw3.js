var n = 0;

document.querySelector('table').addEventListener('click', onClick);

function onClick() {
    if (n %2 == 0) {
        document.getElementById('one').style.backgroundColor = 'white';
        document.getElementById('two').style.backgroundColor = 'black';
        document.getElementById('three').style.backgroundColor = 'black';
        document.getElementById('four').style.backgroundColor = 'white';
        n++;
    }
    else {
        document.getElementById('one').style.backgroundColor = 'black';
        document.getElementById('two').style.backgroundColor = 'white';
        document.getElementById('three').style.backgroundColor = 'white';
        document.getElementById('four').style.backgroundColor = 'black';
        n++;
    }
}

