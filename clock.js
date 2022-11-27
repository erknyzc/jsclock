document.onload(Rename(prompt("Adınız nedir?")),Clock())
function Clock() {
    let time=new Date()
    document.getElementById('myClock').innerHTML=time.toLocaleTimeString()+'&nbsp;'+time.toLocaleString('tr-TR', {weekday: 'long'})
    setInterval('Clock()',1000)
}

function Rename(name) {
    document.getElementById('myName').innerHTML=name
}