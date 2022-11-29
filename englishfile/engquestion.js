window.onload = function(){
    showenglish(0);
}


let questionenglish =[
    {
        id:1,
        question:"A person who renounces the world and practices self-discipline in order to attain salvation ?",
        answer: "Ascetic",
        Options:[
            "Sceptic",
            "Ascetic",
            "Devotee",
            "Antiquarian",
        ],
        
    },
    {
        id:2,
        question:"A hater of knowledge and learning ?",
        answer: "Misologist",
        Options:[
            "Bibliophile",
            "Philologist",
            "Misogynist",
            "Misologist",
        ],
        
    },
    {
        id:3,
        question:"For me, breakfast is .... best meal of the day ?",
        answer: "the",
        Options:[
            "a",
            "an",
            "the",
            "None of the Above",
        ],
        
    },
    {
        id:4,
        question:"There is ... fish in ... bottle ?",
        answer: "a,the",
        Options:[
            "the,the",
            "a,the",
            "a,a",
            "None",
        ],
        
    },
    {
        id:5,
        question:"Our sir teaches Mathematics ... English ?",
        answer: "besides",
        Options:[
            "across",
            "besides",
            "beside",
            "both",
        ],
        
    },
    {
        id:6,
        question:"The boys were playing cricket, convert into passive voice ?",
        answer: "Cricket was being played by the boys",
        Options:[
            "Cricket had been played by the boys",
            "Cricket has been played by the boys",
            "Cricket was played by the boys",
            "Cricket was being played by the boys",
        ],
        
    },
    {
        id:7,
        question:"Find the correct spelt word ?",
        answer: "Adulterate",
        Options:[
            "Adulterate",
            "Adeldurate",
            "Adulterat",
            "Adultarate",
        ],
        
    },
    {
        id:8,
        question:"Find the correctly spelt word ?",
        answer: "Adulation",
        Options:[
            "Adulation",
            "Adlation",
            "Aduletion",
            "Addulation",
        ],
        
    },
    {
        id:9,
        question:"find error: It was him / who came / running  /into the classroom. ?",
        answer: "It was him",
        Options:[
            "It was him",
            "who came",
            "running",
            "into classroom",
        ],
        
    },
    {
        id:10,
        question:"Find error: Ram was / senior to / Sam in college ?",
        answer: "No Error",
        Options:[
            "Ram was",
            "senior to",
            "Sam in college",
            "No Error",
        ],
        
    },
];


let question_countenglish = 0;
let pointenglish = 0;

function nextenglish(){

    let user_answerenglish = document.querySelector("li.option.active").innerHTML;
    //console.log(user_answer);

    if(user_answerenglish == questionenglish[question_countenglish].answer){
        
        pointenglish +=10;
        sessionStorage.setItem("PointsEnglish" , pointenglish);
        document.getElementById('leleo').innerHTML = pointenglish;
       
    }

    
    if(question_countenglish == questionenglish.length-1){
        sessionStorage.setItem("Time",`${minutes} minutes and ${seconds} seconds.`);
        clearInterval(mytime);
        location.href = "englishresult.html";
        return;
    }

    
    question_countenglish++;
    showenglish(question_countenglish);
}

function showenglish(count){
    let quesenglish = document.getElementById('questions');

    //question.innerHTML = "<h2>" + questions[count].question +"</h2>";

    quesenglish.innerHTML = `
    <h2>Q${(question_countenglish)+1}.${questionenglish[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questionenglish[count].Options[0]}</li>
        <li class="option">${questionenglish[count].Options[1]}</li>
        <li class="option">${questionenglish[count].Options[2]}</li>
        <li class="option">${questionenglish[count].Options[3]}</li>
    </ul>
    
    `;

    addActiveenglish()
}

function addActiveenglish(){
    let optionenglish = document.querySelectorAll("li.option")


    for(let i=0; i<optionenglish.length;i++){
        optionenglish[i].onclick = function (){
            for(let j=0; j<optionenglish.length; j++){
                if(optionenglish[j].classList.contains("active")){
                    optionenglish[j].classList.remove("active")
                }
            }
            optionenglish[i].classList.add("active");

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