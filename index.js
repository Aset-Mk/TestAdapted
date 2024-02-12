

let thems=["proizvod", "veroat","vector"]
let namethems=["Тема: производная", "Тема: вероятность","Тема: вектор"]
let materiallink=["https://youtu.be/19H7-BBwMoQ?si=r2NG1jSMnuQiGfp7", "https://youtu.be/8RuhpsayQJg?si=sRJrfhOsA8UdTjXD","https://youtu.be/SGyJeMY1rnE?si=PmnTKJ2m--Pcy8-_"]
let repeat=0;
let cyclemassive=[0, 0, 0]
let veroatmassive=[0.2, 0.2, 0.2]
let colmassive=[23,14,17]
let them=0;
let question=2;

// Создание массива предметов с вероятностями
var probabilities = [
    { name: 0, probability: 0.4 },
    { name: 1, probability: 0.4 },
    { name: 2, probability: 0.4 }
];
next()



// Функция для случайного выбора взвешенного по вероятности элемента
function weightedRandom(probabilities) {
    var i, sum = 0, r = Math.random();

    for (i = 0; i < probabilities.length; i++) {
        sum += probabilities[i].probability;
        if (r <= sum) {
            return probabilities[i].name;
        }
    }
}




function next(){
    window.scroll(0, 0);

    if(repeat>0){
        question=Math.floor(Math.random() * colmassive[them]) + 1;
        
        if(question%2==0){}else{
            question++
        }
        const questionblock = document.querySelector(".question")
        questionblock.src="problems/"+thems[them]+"/1 ("+question+").jpg"
        repeat--
        cyclemassive[them]=20;
        probabilities[them].probability=0.8
    }else{
        them = weightedRandom(probabilities);
        console.log(them)
        question=Math.floor(Math.random() * colmassive[them]) + 1;
        
        if(question%2==0){}else{
            question++
        }
        
        for (let j = 0; j < cyclemassive.length; j++) {
            if (cyclemassive[j] >0) {
                cyclemassive[j]--
                if(cyclemassive[j]==1){
                    probabilities[j].probability=0.4
                }
            }
        }
        console.log(them, "тема")
        const questionblock = document.querySelector(".question")
        questionblock.src="problems/"+thems[them]+"/1 ("+question+").jpg"

    }
    const answer = document.querySelector(".answer")
    answer.style.display="none"

    const buttonanswer = document.querySelector(".button-answer")
    buttonanswer.style.display="none"
    const head = document.querySelector(".head p")
    head.innerText = namethems[them];

    const material = document.querySelector(".answer span a")
    material.innerText = materiallink[them];
}

function view(){
    const answer = document.querySelector(".answer")
    answer.style.display="block"

    const buttonanswer = document.querySelector(".button-answer")
    buttonanswer.style.display="block"

    const answerimg = document.querySelector(".answerimg")
    let number=question-1;
    console.log(them, "тема")
    answerimg.src="problems/"+thems[them]+"/1 ("+number+").jpg"
    
}

function nextnone(){
    repeat=10;
    veroatmassive[them]=0.4;
    next();
}