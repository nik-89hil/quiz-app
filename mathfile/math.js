window.onload = function(){
    showmath(0);
}


let questionsmath =[
    {
        id:1,
        question:"If x2 - 2x + 1 = 0, find the value of x3 + (1/x3 ). ?",
        answer: "2",
        Options:[
            "-2",
            "2",
            "-3",
            "3",
        ],
        
    },
    {
        id:2,
        question:" In a triangle PQR, ∠QOR = 110° where O is the in-center of triangle PQR, then the measure of ∠QPR is: ?",
        answer: "40 degree",
        Options:[
            "55 degree",
            "40 degree",
            "70 degree",
            "150 degree",
        ],
        
    },
    {
        id:3,
        question:"If cosecx + cotx = 7, then, find the value of (7cosecx - 5)/10? ?",
        answer: "2",
        Options:[
            "-3/2",
            "⅖",
            "2",
            "3",
        ],
        
    },
    {
        id:4,
        question:"If the area of a semi-circular field is 30800 sq. m. then the perimeter of the field is (use π = 22/7) ?",
        answer: "720 m",
        Options:[
            "460 m",
            "840 m",
            "720 m",
            "240 m",
        ],
        
    },
    {
        id:5,
        question:"If the value of (a + b + c) = 32 and a2 + b2 + c2 = 484, then find the value of ab + bc + ac ?",
        answer: "270",
        Options:[
            "230",
            "540",
            "300",
            "270",
        ],
        
    },
    {
        id:6,
        question:" A showroom has 4% loss after selling a bike at Rs. 120000. At what price should it sell to get 6% profit? ?",
        answer: "Rs. 132500",
        Options:[
            "Rs. 133500",
            "Rs. 131500",
            "Rs. 132500",
            "Rs. 132000",
        ],
        
    },
    {
        id:7,
        question:"If sin(2α + β) = 1 and sin(α – 2β) = 1/2, then find the value of (α + β). ?",
        answer: "48°",
        Options:[
            "76°",
            "36°",
            "48°",
            "56°",
        ],
        
    },
    {
        id:8,
        question:"The product of two numbers is 1083 and their HCF is 19. Then find their LCM...",
        answer: "57",
        Options:[
            "63",
            "49",
            "57",
            "85",
        ],
        
    },
    {
        id:9,
        question:"If x² - 5y²= 1232, how many pairs are possible for (x, y) (x, y are integers)",
        answer: "2",
        Options:[
            "2",
            "3",
            "1",
            "0",
        ],
        
    },
    {
        id:10,
        question:"If x + y + z = 0, then what is the value of (3y² + x² + z²)/2y² - xz?",
        answer: "2",
        Options:[
            "2",
            "1",
            "3/2",
            "5/3",
        ],
        
    },
];


let question_countmath = 0;
let pointmath = 0;

function nextmath(){

    let user_answermath = document.querySelector("li.option.active").innerHTML;
    //console.log(user_answer);

    if(user_answermath == questionsmath[question_countmath].answer){
        
        pointmath +=10;
        sessionStorage.setItem("PointsMath" , pointmath);
        document.getElementById('leleo').innerHTML = pointmath;
       
    }

    
    if(question_countmath == questionsmath.length-1){
        sessionStorage.setItem("Time",`${minutes} minutes and ${seconds} seconds.`);
        clearInterval(mytime);
        location.href = "resultmath.html";
        return;
    }

    
    question_countmath++;
    showmath(question_countmath);
}

function showmath(count){
    let quesmath = document.getElementById('questions');

    //question.innerHTML = "<h2>" + questions[count].question +"</h2>";

    quesmath.innerHTML = `
    <h2>Q${(question_countmath)+1}.${questionsmath[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questionsmath[count].Options[0]}</li>
        <li class="option">${questionsmath[count].Options[1]}</li>
        <li class="option">${questionsmath[count].Options[2]}</li>
        <li class="option">${questionsmath[count].Options[3]}</li>
    </ul>
    
    `;

    addActivemath()
}

function addActivemath(){
    let optionmath = document.querySelectorAll("li.option")


    for(let i=0; i<optionmath.length;i++){
        optionmath[i].onclick = function (){
            for(let j=0; j<optionmath.length; j++){
                if(optionmath[j].classList.contains("active")){
                    optionmath[j].classList.remove("active")
                }
            }
            optionmath[i].classList.add("active");

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




