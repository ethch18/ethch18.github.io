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
        curdat = alldat[input];
        welc.textContent = 'Well look who it is!  Hello, ' + curdat["nn"] + '!';
        welc.style = "visibility:visible";
        fnfail.style = "color:red;visibility:hidden";
    }
    else {
        curdat = null;
        welc.textContent = 'Well look who it is!  Hello, ';
        welc.style = "visibility:hidden";
        fnfail.style = "color:red;visibility:visible";
        if (input == 'sudo') {
            var supwelc = document.getElementById('superwelc');
            supwelc.style = "visibility:visible";
        }
    }
}