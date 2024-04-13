let userVal = document.querySelector("#user-val");
let result = document.querySelector("#result");
let fromSelect = document.querySelector("#from").innerText;
let toselect = document.querySelector("#to").innerText;
let btn = document.querySelector("#btn");


// my all functions
const printInch = () => {
    result.value = userVal.value * 12;
};


// const printFeet = () => {
//     console.log(`feet`);
// };
// const printMeter = () => {
//     console.log(`meter`);
// };
// const printKilometer = () => {
//     console.log(`kilometer`);
// };
// const printCentimeter = () => {
//     console.log(`centimeter`);
// };

const targetElement = (elemet) => {
    if (elemet.value === `Inch`) {
        printInch();
    }

    // else if (elemet.value === `Feet`) {
    //     printFeet();
    // }

    // else if (elemet.value === `Meter`) {
    //     printMeter();
    // }

    // else if (elemet.value === `Kilometer`) {
    //     printKilometer();
    // }

    // else if (elemet.value === `Centimeter`) {
    //     printCentimeter();
    // }
};

let selects = document.querySelectorAll(".select");

selects.forEach(select => {
    select.addEventListener("change", (evt) => {
        targetElement(evt.target);
    });

    let selectName = select.name;
    let options = select.querySelectorAll("option");

    options.forEach(option => {
        if (selectName === `from` && option.value === `Feet`) {
            option.selected = true;
        } else if (selectName === `to` && option.value === `Inch`) {
            option.selected = true;
        }
    });
});

btn.addEventListener("click" , (evt) => {
    evt.preventDefault();
    printInch();
});