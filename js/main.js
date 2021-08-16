let a = 0

function add(){
    a++
    document.getElementById('screen').innerText = a
}
function sub(){
    a--
    document.getElementById('screen').innerText = a
}
function reset(){
    a=0
    document.getElementById('screen').innerText = a
}

