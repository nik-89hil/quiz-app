
window.onload = function(){
    show(0);
}


let questions = quiz; 


function submit_form(e){
    e.preventDefault();

    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("Username" , name);
    location.href = "question.html";
   // console.log(name);
}

let question_count = 0;
let point = 0;

function next(){

    let user_answer = document.querySelector("li.option.active").innerHTML;
    //console.log(user_answer);

    if(user_answer == questions[question_count].answer){
        point +=10;
        sessionStorage.setItem("Points" , point);
        document.getElementById('leleo').innerHTML = point;
       
    }

    
    if(question_count == questions.length-1){
        sessionStorage.setItem("Time",`${minutes} minutes and ${seconds} seconds.`);
        clearInterval(mytime);
        location.href = "result.html";
        return;
    }

    
    question_count++;
    show(question_count);
}

function show(count){
    let question = document.getElementById('questions');

    //question.innerHTML = "<h2>" + questions[count].question +"</h2>";

    question.innerHTML = `
    <h2>Q${(question_count)+1}.${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].Options[0]}</li>
        <li class="option">${questions[count].Options[1]}</li>
        <li class="option">${questions[count].Options[2]}</li>
        <li class="option">${questions[count].Options[3]}</li>
    </ul>
    
    `;

    addActive()
}

function addActive(){
    let option = document.querySelectorAll("li.option")


    for(let i=0; i<option.length;i++){
        option[i].onclick = function (){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");

        }
    }
}

let dat = new Date(new Date().setTime(0));
let time = dat.getTime();
let seconds = Math.floor((time %(100*60))/1000);
let minutes = Math.floor((time % (100*60*60))/(1000*60));
let timer = 0;

let mytime = setInterval(function(){
    if(seconds < 59){
        seconds++;
    }else{
        minutes++;
        seconds= 0;
    }
    let twosecond = seconds<10 ? `0${seconds}` :`${seconds}`
    let twominute = minutes<10 ? `0${minutes}` :`${minutes}`
    document.querySelector(".timehere").innerHTML = `${twominute} : ${twosecond}`;
},1000);








/*
let question_count = 0;
let point = 0 ;


function next(){
    question_count ++;
    show(question_count);
}

function show(count){
    let question = document.getElementById('question');
    question.innerHTML = '<h2> ${questions[count].question} </h2>'
}
*/











































































