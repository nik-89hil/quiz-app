window.onload = function(){
    showscience(0);
}


let questionscience =[
    {
        id:1,
        question:"The image formed in a compound microscope is",
        answer: "inverted",
        Options:[
            "erect",
            "inverted",
            "sometimes erect, sometimes inverted",
            "none",
        ],
        
    },
    {
        id:2,
        question:"The lens used in a simple microscope is ?",
        answer: "Convex",
        Options:[
            "Concave",
            "Convex",
            "Cylindrical",
            "None of the Above",
        ],
        
    },
    {
        id:3,
        question:"The elimination of toxic nitrogenous waste and excess water in man is by ?",
        answer: "Excretion",
        Options:[
            "Excretion",
            "Circulation",
            "Pollution",
            "Pollution",
        ],
        
    },
    {
        id:4,
        question:"The S. I. unit of refractive index is ?",
        answer: "no unit",
        Options:[
            "meter",
            "cm",
            "watt",
            "no unit",
        ],
        
    },
    {
        id:5,
        question:" The liquid metal is ?",
        answer: "Mercury",
        Options:[
            "Bismuth",
            "Magnesium",
            "Sodium",
            "Mercury",
        ],
        
    },
    {
        id:6,
        question:" Which of the following is not a primary colour ?",
        answer: "Yellow",
        Options:[
            "Red",
            "Blue",
            "Yellow",
            "Green",
        ],
        
    },
    {
        id:7,
        question:"Endothermic reactions are those in which ?",
        answer: "Heat is absorbed",
        Options:[
            "Heat is evolved",
            "Temperature increases",
            "Heat is absorbed",
            "Light is produced",
        ],
        
    },
    {
        id:8,
        question:"Which colour of light is deviated least ?",
        answer: "Red",
        Options:[
            "Red",
            "Blue",
            "Green",
            "Violet",
        ],
        
    },
    {
        id:9,
        question:"Acid present in gastric juice is ?",
        answer: "Hydrochloric Acid",
        Options:[
            "Hydrochloric Acid",
            "Citric Acid",
            "Acetic Acid",
            "Sulphuric Acid",
        ],
        
    },
    {
        id:10,
        question:"Which blood cells are called 'Soldiers' of the body ?",
        answer: "WBC",
        Options:[
            "WBC",
            "Platelets",
            "RBC",
            "All of the above",
        ],
        
    },
];


let question_countscience = 0;
let pointscience = 0;

function nextscience(){

    let user_answerscience = document.querySelector("li.option.active").innerHTML;
    //console.log(user_answer);

    if(user_answerscience == questionscience[question_countscience].answer){
       
        pointscience +=10;
        sessionStorage.setItem("PointsScience" , pointscience);
        document.getElementById('leleo').innerHTML = pointscience;
       
    }

    
    if(question_countscience == questionscience.length-1){
        sessionStorage.setItem("Time",`${minutes} minutes and ${seconds} seconds.`);
        clearInterval(mytime);
        location.href = "resultscience.html";
        return;
    }

    
    question_countscience++;
    showscience(question_countscience);
}

function showscience(count){
    let quescience = document.getElementById('questions');

    //question.innerHTML = "<h2>" + questions[count].question +"</h2>";

    quescience.innerHTML = `
    <h2>Q${(question_countscience)+1}.${questionscience[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questionscience[count].Options[0]}</li>
        <li class="option">${questionscience[count].Options[1]}</li>
        <li class="option">${questionscience[count].Options[2]}</li>
        <li class="option">${questionscience[count].Options[3]}</li>
    </ul>
    
    `;

    addActivescience()
}

function addActivescience(){
    let optionscience = document.querySelectorAll("li.option")


    for(let i=0; i<optionscience.length;i++){
        optionscience[i].onclick = function (){
            for(let j=0; j<optionscience.length; j++){
                if(optionscience[j].classList.contains("active")){
                    optionscience[j].classList.remove("active")
                }
            }
            optionscience[i].classList.add("active");

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
