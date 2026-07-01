/* =====================================
   FitBangla Premium Dashboard
   Version 1.0
====================================== */

const app = {

    weight:95,
    target:80,

    water:0,
    waterGoal:3500,

    steps:0,
    stepGoal:10000,

    completed:0,
    totalTask:8

}

/* -----------------------------
   Welcome
------------------------------*/

window.onload=()=>{

    calculateProgress()

    createFloatingButton()

}

/* -----------------------------
   Progress
------------------------------*/

function calculateProgress(){

    let progress=((app.weight-app.target)/15)*100

    progress=Math.min(progress,100)

    console.log("Weight Progress",progress)

}

/* -----------------------------
   Water
------------------------------*/

function addWater(){

    app.water+=250

    if(app.water>app.waterGoal){

        app.water=app.waterGoal

    }

    alert("💧 পানি পান করেছেন : "+app.water+" ml")

}

/* -----------------------------
   Steps
------------------------------*/

function addSteps(){

    app.steps+=500

    if(app.steps>app.stepGoal){

        app.steps=app.stepGoal

    }

    alert("👣 মোট স্টেপ : "+app.steps)

}

/* -----------------------------
   Daily Task
------------------------------*/

function finishTask(){

    app.completed++

    if(app.completed>app.totalTask){

        app.completed=app.totalTask

    }

    let percent=Math.floor((app.completed/app.totalTask)*100)

    alert("আজকের অগ্রগতি : "+percent+"%")

}

/* -----------------------------
   Dark Mode
------------------------------*/

function toggleTheme(){

    document.body.classList.toggle("dark")

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    )

}

/* -----------------------------
   Load Theme
------------------------------*/

if(localStorage.getItem("theme")=="true"){

    document.body.classList.add("dark")

}

/* -----------------------------
   Print
------------------------------*/

function printPage(){

    window.print()

}

/* -----------------------------
   Floating Button
------------------------------*/

function createFloatingButton(){

    const btn=document.createElement("button")

    btn.innerHTML="🖨️"

    btn.className="floating"

    btn.onclick=printPage

    document.body.appendChild(btn)

}

/* -----------------------------
   Today's Date
------------------------------*/

const today=new Date()

console.log(today.toLocaleDateString("bn-BD"))

/* -----------------------------
   Quote
------------------------------*/

const quote=[

"আজকের পরিশ্রম আগামীকালের ফলাফল।",

"ধীরে চলুন, কিন্তু থামবেন না।",

"প্রতিদিন একটু উন্নতি করুন।",

"আপনার শরীর আপনার ভবিষ্যতের বিনিয়োগ।",

"শৃঙ্খলা সফলতার প্রথম ধাপ।"

]

const random=Math.floor(Math.random()*quote.length)

console.log(quote[random])
