//position button
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const slot4 = document.getElementById('slot4');
const slot5 = document.getElementById('slot5');
let index = 1;

//image dancer
const Img = document.getElementById('ImgLoad');
const dancers = [
    'anh_01.png', 'anh_02.png', 'anh_03.png', 'anh_04.png', 'anh_05.png',
    'anh_06.png', 'anh_07.png', 'anh_08.png', 'anh_09.png', 'anh_10.png',
    'anh_11.png', 'anh_12.png', 'anh_13.png', 'anh_14.png', 'anh_15.png',
    'anh_16.png', 'anh_17.png', 'anh_18.png', 'anh_19.png', 'anh_20.png',
    'anh_21.png', 'anh_22.png', 'anh_23.png', 'anh_24.png', 'anh_25.png',
    'anh_26.png', 'anh_27.png', 'anh_28.png', 'anh_29.png', 'anh_30.png',
    'anh_31.png', 'anh_32.png', 'anh_33.png', 'anh_34.png', 'anh_35.png',
    'anh_36.png', 'anh_37.png', 'anh_38.png', 'anh_39.png', 'anh_40.png',
    'anh_41.png', 'anh_42.png', 'anh_43.png', 'anh_44.png', 'anh_45.png',
    'anh_46.png', 'anh_47.png', 'anh_48.png', 'anh_49.png', 'anh_50.png',
    'anh_51.png', 'anh_52.png', 'anh_53.png', 'anh_54.png', 'anh_55.png',
    'anh_56.png', 'anh_57.png', 'anh_58.png', 'anh_59.png', 'anh_60.png',
    'anh_61.png', 'anh_62.png', 'anh_63.png', 'anh_64.png', 'anh_65.png',
    'anh_66.png', 'anh_67.png', 'anh_68.png', 'anh_69.png', 'anh_70.png',
    'anh_71.png', 'anh_72.png', 'anh_73.png', 'anh_74.png', 'anh_75.png',
    'anh_76.png', 'anh_77.png', 'anh_78.png', 'anh_79.png', 'anh_80.png',
];


//image button
const readyButton = ['readyUpBtn.png', 'readyDownBtn.png', 'readyLeftBtn.png', 'readyRightBtn.png'];
const trueButton = ['trueUpBtn.png', 'trueDownBtn.png', 'trueLeftBtn.png', 'trueRightBtn.png']
const falseButton = ['falseUpBtn.png', 'falseDownBtn.png', 'falseLeftBtn.png', 'falseRightBtn.png'];
const keyCode = [38, 40, 37, 39];
const slot = [slot1, slot2, slot3, slot4, slot5];

//Sound
var value;
var a = [];
let myAudio = document.getElementById('myAudio');
myAudio.volume = 0.2;
myAudio.loop = true;

//random Button
function randomButtonReady() {
    for (let i = 0; i < 5; i++) {
        value = Math.round(Math.random() * 3);
        a.push(value);
    }

}

randomButtonReady();

//button Ready Random
function btnReady() {

    slot1.src = `images/button/ready-button/${readyButton[a[0]]}`;
    slot2.src = `images/button/ready-button/${readyButton[a[1]]}`;
    slot3.src = `images/button/ready-button/${readyButton[a[2]]}`;
    slot4.src = `images/button/ready-button/${readyButton[a[3]]}`;
    slot5.src = `images/button/ready-button/${readyButton[a[4]]}`;

}

btnReady();


var count = 0;
var score = 0;
var miss = 0;

function loopBar() {

}

//check Button
function checkBtn(event) {

    setInterval(() => {
        if (count >= 5) {
            count = 0;
            a = [];
            randomButtonReady();
            btnReady();
        }
    }, 2000)

    if (event.keyCode == keyCode[a[count]]) {
        slot[count].src = `images/button/true-button/${trueButton[a[count]]}`;
        let myTing = new Audio('true.mp3');
        myTing.play();
        score++;
        document.getElementById('score').innerHTML = 'SCORE: ' + score;
        checkWinner();

    } else {
        slot[count].src = `images/button/false-button/${falseButton[a[count]]}`;
        let myBeep = new Audio('false.mp3');
        myBeep.play();
        miss++;
        checkLoser();
    }
    count++;
}

window.addEventListener('keydown', checkBtn);

//check winner
function checkWinner() {
    if (score >= 10) {
        alert('NGƯỜI KHÔNG THUA LÀ NGƯỜI THẮNG =))))))')
        alert('bạn được ' + score + ' điểm');
        location.reload();
    }
}



//check Loser
function checkLoser() {
    if (miss >= 5) {
        alert('bạn được ' + score + ' điểm');
        alert('NGƯỜI KHÔNG THẮNG LÀ NGƯỜI THUA =))))');
        location.reload();
    }
}


//onload Page
function loadPage() {
    Img.src = dancers[0];
    changeImg();
}

//loop image dacer
function changeImg() {
    setInterval(() => {
        Img.src = dancers[index];
        index++;
        if (index == dancers.length - 1) {
            index = 0;
        }

    }, 180)
}