var arrayInts = [1, 2, 2, 2, 2, 3, 3, 4];

function mean() {
    "use strict";
    var total = 0, i = 0, avg;
    for (i = 0; i < arrayInts.length; i += 1) {
        total += arrayInts[i];
    }
    avg = total / arrayInts.length;
    window.alert(avg);
}

function displayDate() {
    "use strict";
    document.getElementById("demo").innerHTML = Date();
}

function median() {
    "use strict";
    arrayInts.sort(function (a, b) {return a - b; });
    var half = Math.floor(arrayInts.length / 2);
    
    if (arrayInts.length % 2 === 0) {
        window.alert(arrayInts[half - 1]);
    } else {
        window.alert(arrayInts[(arrayInts.length - 1) / 2]);
    }
}

function mode() {
    "use strict";
    if (arrayInts.length === 0) {
        return null;
    }
    arrayInts.sort(function (a, b) {return a - b; });
    var numTrack = arrayInts[0], i = 1, countOccur = 0, maxOccur = 0, maxOVal;
    for (i = 1; i < arrayInts.length; i += 1) {
        if (numTrack === arrayInts[i]) {
            countOccur += 1;
        } else if (numTrack !== arrayInts[i]) {
            numTrack = arrayInts[i];
            if (countOccur > maxOccur) {
                maxOccur = countOccur;
                maxOVal = arrayInts[i];
            }
        }
    }
    window.alert("mode is " + (maxOVal - 2) + " (it occurs " + maxOccur + " times)");
}
