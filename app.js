// my all functions
const printInch = () => {
    console.log(`inch`);
};

const printFeet = () => {
    console.log(`feet`);
};
const printMeter = () => {
    console.log(`meter`);
};
const printKilometer = () => {
    console.log(`kilometer`);
};
const printCentimeter = () => {
    console.log(`centimeter`);
};

const targetElemet = (elemet) => {
    if (elemet.value === `Inch`) {
        printInch();
    }

    else if (elemet.value === `Feet`) {
        printFeet();
    }

    else if (elemet.value === `Meter`) {
        printMeter();
    }

    else if (elemet.value === `Kilometer`) {
        printKilometer();
    }

    else if (elemet.value === `Centimeter`) {
        printCentimeter();
    }
};

//  my all variables

let selects = document.querySelectorAll(".select");

selects.forEach(select => {
    select.addEventListener("change" , (evt) => {
        targetElemet(evt.target);
    });
});