let userVal = document.querySelector("#user-val");
let result = document.querySelector("#result");
let msg = document.querySelector("#final-msg");

// my all functions
const removeDecimals = (resultVal) => {
    resultVal = +resultVal;
    if (!Number.isNaN(resultVal) && !Number.isInteger(resultVal)) {
        return resultVal.toFixed(2); 
    }
    return resultVal;
};

const inchIntoFeet = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 12;
    });
};

const feetIntoCentimeter = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 30.48;
    });
};

const feetIntoKilometer = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3281;
    });
};

const feetIntoMeter = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3.281;
    });
};

const feetIntoFeet = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });
};

const feetIntoInch = (fromSelVal , toSelVal) => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 12;
    });
};

let selects = document.querySelectorAll(".select");

selects.forEach(select => {
    select.addEventListener("change" , () => {
        let fromSelect = document.querySelector("#from");
        let toSelect = document.querySelector("#to");

        if (fromSelect.value === `Feet` && toSelect.value === `Inch`) {
            feetIntoInch(fromSelect.value , toSelect.value);
        }


        else if (fromSelect.value === `Feet` && toSelect.value === `Feet`) {
            feetIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Meter`) {
            feetIntoMeter(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Kilometer`) {
            feetIntoKilometer(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Centimeter`) {
            feetIntoCentimeter(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Feet`) {
            inchIntoFeet(fromSelect.value , toSelect.value);
        }
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

window.addEventListener("load" , () => {
        let fromSelect = document.querySelector("#from");
        let toSelect = document.querySelector("#to");

        if (fromSelect.value === `Feet` && toSelect.value === `Inch`) {
            feetIntoInch(fromSelect.value , toSelect.value);
        }
});