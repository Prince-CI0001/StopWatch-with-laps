
let startBtn = document.getElementById('play');
let stopBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lap = document.getElementById('lap');
let li = document.getElementById("data");
let countLap = 0;
let arr = [];

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

lap.addEventListener('click', function (event) {
    lapstack(event);
});

startBtn.addEventListener('click', function () {
    showButton("pause");
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    showButton("play");
});

resetBtn.addEventListener('click', function () {

    var lap = document.getElementById("data");
    lap.innerHTML = '';

    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById("watch").innerHTML = "00:00:00:00";
    showButton("play");
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById("watch").innerText = `${hrString}:${minString}:${secString}:${countString}`;
        setTimeout(stopWatch, 10);

    }
}


function showButton(buttonKey) {
    const buttonToShow = buttonKey === "play" ? startBtn : stopBtn;
    const buttonToHide = buttonKey === "play" ? stopBtn : startBtn;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
let i=0;
function lapstack(e) {
    // document.getElementsByClassName("lap-chart").style.display ="block";
    countLap++;
    var list = document.createElement("li");
    list.setAttribute("id", "listData");
    var data = document.getElementById("watch").innerText;
    arr[i++]=data;
    list.innerHTML += data;
    if (countLap <= 10)
        li.appendChild(list);

    else
        average();
}

let hrS=0;
let minS=0;
let secS=0;
let milliS=0;
function average() {
    console.log(arr);
 for( i=0;i<arr.length;i++)
 {
    var trim = arr[i].split(":");
    console.log(trim);
    hrS += parseInt(trim[0]);
    minS += parseInt(trim[1]);
    secS += parseInt(trim[2]);
    milliS += parseInt(trim[3]);
 }
 console.log(typeof(milliS));
 hrS = hrS/arr.length;
 minS = minS/arr.length;
 secS = secS/arr.length;
 milliS = milliS/arr.length;
//  console.log(secS);
 alert(Math.floor(hrS) + ":" + Math.floor(minS) + ":" + Math.floor(secS)  + ":" + Math.floor(milliS));
}