// these variables are for accessing both inputs
let userVal = document.querySelector("#user-val");
let result = document.querySelector("#result");

//there are my all functions of all units and they all created almost with the same pattern but the conditions are change in each function.

// there are all the functions of convert centimeter into all the units which placed in the select tag

// this function is for converting centimetre into centimetre
const centimetreIntoCentimetre = () => {

    // this event listener applied on 1st input
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    // this event listener applied on 2nd input
    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

// this function is for converting centimetre into kilometre
const centimetreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 100000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 100000;
    });
};

// this function is for converting centimetre into metre
const centimetreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 100;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 100;
    });
};

// this function is for converting centimetre into inch
const centimetreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 2.54;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 2.54;
    });
};

// this function is for converting centimetre into feet
const centimetreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 30.48;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 30.48;
    });
};
// centimetre into all other units's functions are ended



// these functions are for converting kilometre into other units of select tags

// this function is for converting kilometre into centimetre
const kilometreIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 100000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 100000;
    });
};

// this function is for converting kilometre into kilometre
const kilometreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

// this function is for converting kilometre into metre
const kilometreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 1000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 1000;
    });
};

// this function is for converting kilometre into inch
const kilometreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 39370;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 39370;
    });
};

// this function is for converting kilometre into feet
const kilometreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 3281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 3281;
    });
};
// kilometre into other units's functions are ended


// these functions are for converting metre into other units of select tags

// this function is for converting metre into centimetre
const metreIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 100;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 100;
    });
};

// this function is for converting metre into kilometre
const metreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 1000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 1000;
    });
};

// this function is for converting metre into metre
const metreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

// this function is for converting metre into inch
const metreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 39.37;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 39.37;
    });
};

// this function is for converting metre into feet
const metreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 3.281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 3.281;
    });
};
// metre into other units's functions are ended


// these functions are for converting inch into other units of select tags

// this function is for converting inch into centimetre
const inchIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 2.54;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 2.54;
    });
};

// this function is for converting inch into kilometre
const inchIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 39370;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 39370;
    });
};

// this function is for converting inch into metre
const inchIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 39.37;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 39.37;
    });
};

// this function is for converting inch into inch
const inchIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

// this function is for converting inch into feet
const inchIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 12;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 12;
    });
};
// inch into other units's functions are completed


// these functions are for converting the feet into other units of select tags

// this function is for converting feet into centimetre
const feetIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 30.48;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 30.48;
    });
};

// this function is for converting feet into kilometre
const feetIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 3281;
    });
};

// this function is for converting feet into metre
const feetIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3.281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 3.281;
    });
};

// this function is for converting feet into feet
const feetIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

// this function is for converting feet into inch
const feetIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 12;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 12;
    });
};
// feet into other units functions are ended
// my all function are ended

// this variable is for accessing the selects tags
let selects = document.querySelectorAll(".select");

// this loop is on each select tag for adding the functionality on them
selects.forEach(select => {

    // this code is for creating an hover effect
    select.addEventListener("mouseover" , function () {
        this.style.background = `#1a1919`;
        this.style.border = `.1rem solid #4b4b4b`;
    });

    select.addEventListener("mouseout" , function () {
        this.style.background = `#4b4b4b`;
    });
    // hover effect ended

    // this event listner is for applying the functions when user selects any unit for convert it into other
    select.addEventListener("change" , () => {
        let fromSelect = document.querySelector("#from");
        let toSelect = document.querySelector("#to");

        // these all conditions are for each and every unit of this project. if they will be true then according to them a function will be run
        if (fromSelect.value === `Feet` && toSelect.value === `Inch`) {
            feetIntoInch(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Feet`) {
            feetIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Metre`) {
            feetIntoMetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Kilometre`) {
            feetIntoKilometre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Feet` && toSelect.value === `Centimetre`) {
            feetIntoCentimetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Feet`) {
            inchIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Inch`) {
            inchIntoInch(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Metre`) {
            inchIntoMetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Kilometre`) {
            inchIntoKilometre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Inch` && toSelect.value === `Centimetre`) {
            inchIntoCentimetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Metre` && toSelect.value === `Feet`) {
            metreIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Metre` && toSelect.value === `Inch`) {
            metreIntoInch(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Metre` && toSelect.value === `Metre`) {
            metreIntoMetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Metre` && toSelect.value === `Kilometre`) {
            metreIntoKilometre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Metre` && toSelect.value === `Centimetre`) {
            metreIntoCentimetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Kilometre` && toSelect.value === `Feet`) {
            kilometreIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Kilometre` && toSelect.value === `Inch`) {
            kilometreIntoInch(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Kilometre` && toSelect.value === `Metre`) {
            kilometreIntoMetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Kilometre` && toSelect.value === `Kilometre`) {
            kilometreIntoKilometre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Kilometre` && toSelect.value === `Centimetre`) {
            kilometreIntoCentimetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Centimetre` && toSelect.value === `Feet`) {
            centimetreIntoFeet(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Centimetre` && toSelect.value === `Inch`) {
            centimetreIntoInch(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Centimetre` && toSelect.value === `Metre`) {
            centimetreIntoMetre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Centimetre` && toSelect.value === `Kilometre`) {
            centimetreIntoKilometre(fromSelect.value , toSelect.value);
        }

        else if (fromSelect.value === `Centimetre` && toSelect.value === `Centimetre`) {
            centimetreIntoCentimetre(fromSelect.value , toSelect.value);
        }
        // my all conditions are ended
    });
    // event listener on is also ended


    // this aprt of code is for declearing feet and inch as selected
    let selectName = select.name;
    let options = select.querySelectorAll("option");

    options.forEach(option => {
        if (selectName === `from` && option.value === `Feet`) {
            option.selected = true;
        } else if (selectName === `to` && option.value === `Inch`) {
            option.selected = true;
        }
    });
    // the code of declearing selected is ended
});
// the loop is also ended



// this code is for running feet into inch function when window will be load beacuse the both units are selected in above function
window.addEventListener("load" , () => {
        let fromSelect = document.querySelector("#from");
        let toSelect = document.querySelector("#to");

        if (fromSelect.value === `Feet` && toSelect.value === `Inch`) {
            feetIntoInch(fromSelect.value , toSelect.value);
        }
});
