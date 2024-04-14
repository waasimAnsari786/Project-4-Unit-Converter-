let userVal = document.querySelector("#user-val");
let result = document.querySelector("#result");

// my all functions

const centimetreIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

const centimetreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 100000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 100000;
    });
};

const centimetreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 100;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 100;
    });
};

const centimetreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 2.54;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 2.54;
    });
};

const centimetreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 30.48;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 30.48;
    });
};

const kilometreIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 100000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 100000;
    });
};

const kilometreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

const kilometreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 1000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 1000;
    });
};

const kilometreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 39370;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 39370;
    });
};

const kilometreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 3281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 3281;
    });
};

const metreIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 100;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 100;
    });
};

const metreIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 1000;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 1000;
    });
};

const metreIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

const metreIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 39.37;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 39.37;
    });
};

const metreIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 3.281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 3.281;
    });
};

const inchIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 2.54;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 2.54;
    });
};

const inchIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 39370;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 39370;
    });
};

const inchIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 39.37;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 39.37;
    });
};

const inchIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

const inchIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 12;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 12;
    });
};

const feetIntoCentimetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 30.48;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 30.48;
    });
};

const feetIntoKilometre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 3281;
    });
};

const feetIntoMetre = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value / 3.281;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value * 3.281;
    });
};

const feetIntoFeet = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value;
    });
};

const feetIntoInch = () => {
    userVal.addEventListener("input" , () => {
        result.value = userVal.value * 12;
    });

    result.addEventListener("input" , () => {
        userVal.value = result.value / 12;
    });
};

let selects = document.querySelectorAll(".select");

selects.forEach(select => {
    select.addEventListener("mouseover" , function () {
        this.style.background = `#1a1919`;
        this.style.border = `.1rem solid #4b4b4b`;
    });

    select.addEventListener("mouseout" , function () {
        this.style.background = `#4b4b4b`;
    });

    select.addEventListener("change" , () => {
        let fromSelect = document.querySelector("#from");
        let toSelect = document.querySelector("#to");

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
