var setControl = [];
var amountSet = 4;
while (amountSet > setControl.length) {
    setControl.push(prompt('Enter the command Example(right, left, top, bottom)'))
}

var ogre = document.getElementById('ogre');
var x = 300,
    y = 300;
var i = 0;

function moveRight() {
    x+=200;
    ogre.style.left = x + 'px';
    ogre.style.transitionDuration = '2s';
    setTimeout(getNextFunction, 2000)
}

function moveBottom() {
    y+=200;
    ogre.style.top = y + 'px';
    ogre.style.transitionDuration = '2s';
    setTimeout(getNextFunction, 2000)
}

function moveLeft() {
    x-=200;
    ogre.style.left = x + 'px';
    ogre.style.transitionDuration = '2s';
    setTimeout(getNextFunction, 2000)
}

function moveTop() {
    y-=200;
    ogre.style.top = y + 'px';
    ogre.style.transitionDuration = '2s';
    setTimeout(getNextFunction, 2000)
}

function getNextFunction () {
    i++;
    start();
}

function start() {
    if (setControl[i] == 'right') {
        moveRight()
    }
    if (setControl[i] == 'left') {
        moveLeft()
    }
    if (setControl[i] == 'top') {
        moveTop()
    }
    if (setControl[i] == 'bottom') {
        moveBottom()
    }

}
setTimeout(start, 2000);
