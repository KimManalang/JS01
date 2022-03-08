var fname;
fname = prompt('Enter your First Name');

var fxname = document.getElementById('name');
fxname.textContent = fname.toUpperCase();

var unamefb;
unamefb = prompt("Enter your Username");


var path = document.write("<a href=facebook.com/" + unamefb.toLowerCase() + ">Procced to my Facebook Profile</a>");
var link = document.getElementById('note');
link.textContent = path;


var today = new Date();
console.log(today);

var hour = today.getHours();
console.log(hour);

var greeting;

if (hour >= 1 && hour < 12 ) {
    greeting = 'Good Morning!'
} else if (hour >= 12 && hour < 18 ) {s
    greeting = 'Good Afternoon!'
} else {
    greeting = 'Good Evening!'
}


document.write('<h2>'+ greeting + '</h2>');


