var curdat = null;
var alldat = null;

window.onload = function() {
    $.getJSON('mystery.json', function(data) {
        console.log(data);
        alldat = data;
    })
}

function fn() {
    var input = document.getElementById('fn').value;
    var fnfail = document.getElementById('fnfail');
    var welc = document.getElementById('welc');
    if (alldat.hasOwnProperty(input)) {
        welc.textContent += input + '!';
        welc.style = "visibility:visible";
        curdat = alldat[input];
        fnfail.style = "color:red;visibility:hidden";
    }
    else {
        welc.textContent = 'Well look who it is!  Hello, ';
        welc.style = "visibility:hidden";
        fnfail.style = "color:red;visibility:visible";
    }
}