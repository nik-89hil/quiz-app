let u = sessionStorage.getItem("Username");
let po = sessionStorage.getItem("PointsScience");
let me = sessionStorage.getItem("Time");

document.querySelector('.herename').innerHTML = u;
document.getElementById('correctquestion').innerHTML = po/10;
document.getElementById('wrongquestion').innerHTML = 10-(po/10);
document.getElementById('Percentage').innerHTML = ((po/10)/10)*100 +"%";

document.getElementById('timetaken').innerHTML = me;