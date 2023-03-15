// let basicDataEntry = document.createElement('div');
// basicDataEntry.innerHTML = div;
// document.body.innerHTML = basicDataEntry;

// let initialData = document.createElement('INPUT');

// let testRcord = document.createElement('p');
// testRcord.innerText = "This is a paragraph";
// document.body.appendChild(testRcord);

// const divEl = document.createElement('div');

// document.body.innerHTML = divEl;

// вес
//let x = document.createElement("INPUT");
//x.setAttribute("form", "number");
//document.body.appendChild(x);

// цена
//let y = document.createElement("INPUT");
//y.setAttribute("form", "number");
//document.body.appendChild(y);

// сравниваемый вес
//let z = document.createElement("INPUT");
//z.setAttribute("form", "number");
//document.body.appendChild(z);

//let q = document.createElement('p');
//q.setAttribute("form", "number");
//document.body.appendChild(q);



// let primaryWeight = document.querySelectorById('inputWeight');
// console.log(primaryWeight);

// function LengthConverter(valNum) {

//     document.getElementById("outputMeters").innerHTML=valNum*primaryWeight;
//   };

// console.log('inputWeight'+'inputFeet');

    //function that evaluates the weight and return result
// function kiloweightConvert(value) {
//     document.getElementById("Pounds").innerHTML = value * 2.2046;
//     document.getElementById("Ounces").innerHTML = value * 35.274;
//     document.getElementById("Grams").innerHTML = value * 1000; 
//     document.getElementById("Stones").innerHTML = value * 0.1574;
//     }

function weightConverter(source,valNum)  {
    valNum = parseFloat(valNum);
    var inputKilograms = document.getElementById("inputKilograms");
    var inputFigograms = document.getElementById("inputFigograms");
    if (source=="inputKilograms") {
        inputFigograms.value=(valNum/2.2046).toFixed(2);
    }
    if (source=="inputFigograms") {
        inputKilograms.value=(valNum*0.1574).toFixed(3);
    }
    // console.log(inputKilograms);
    // console.log(inputFigograms);
}

    // function weightConverter(source,valNum) {
    //     valNum = parseFloat(valNum);
    //     var inputPounds = document.getElementById("inputPounds");
    //     var inputKilograms = document.getElementById("inputKilograms");
    //     var inputOunces = document.getElementById("inputOunces");
    //     var inputGrams = document.getElementById("inputGrams");
    //     var inputStones = document.getElementById("inputStones");
    //     if (source=="inputPounds") {
    //       inputKilograms.value=(valNum/2.2046).toFixed(2);
    //       inputOunces.value=(valNum*16).toFixed(2);
    //       inputGrams.value=(valNum/0.0022046).toFixed();
    //       inputStones.value=(valNum*0.071429).toFixed(3);
    //     }
    //     if (source=="inputKilograms") {
    //       inputPounds.value=(valNum*2.2046).toFixed(2);
    //       inputOunces.value=(valNum*35.274).toFixed(2);
    //       inputGrams.value=(valNum*1000).toFixed();
    //       inputStones.value=(valNum*0.1574).toFixed(3);
    //     }
    //     if (source=="inputOunces") {
    //       inputPounds.value=(valNum*0.062500).toFixed(4);
    //       inputKilograms.value=(valNum/35.274).toFixed(4);
    //       inputGrams.value=(valNum/0.035274).toFixed(1);
    //       inputStones.value=(valNum*0.0044643).toFixed(4);
    //     }
    //     if (source=="inputGrams") {
    //       inputPounds.value=(valNum*0.0022046).toFixed(4);
    //       inputKilograms.value=(valNum/1000).toFixed(4);
    //       inputOunces.value=(valNum*0.035274).toFixed(3);
    //       inputStones.value=(valNum*0.00015747).toFixed(5);
    //     }
    //     if (source=="inputStones") {
    //       inputPounds.value=(valNum*14).toFixed(1);
    //       inputKilograms.value=(valNum/0.15747).toFixed(1);
    //       inputOunces.value=(valNum*224).toFixed();
    //       inputGrams.value=(valNum/0.00015747).toFixed();
    //     }
      
    //   }