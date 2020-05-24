let srcList = document.getElementById('src');
let destList = document.getElementById('dest');
let btnMove = document.getElementById('move');
btnMove.addEventListener('click', function() {
    while(srcList.hasChildNodes()) {
        let item = srcList.removeChild(srcList.firstChild);
        destList.appendChild(item);
    }
});