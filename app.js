class Fahrenheit {
		constructor(val) {
				this.val = parseFloat(val);
				this.type = "fahrenheit";
				this.suffix = "ºF";
				this.conv_val = (this.val - 32) * (5 / 9);
				this.conv_suffix = "ºC";

        this.rounding = (this.val % 1 !== 0);
        if (this.rounding) {
            this.val = this.val.toFixed(2);
            this.conv = this.conv_val.toFixed(2);
        }
        else {
            this.conv = this.conv_val.toFixed();
        }

        this.clean_val = this.val + this.suffix;
        this.clean_conv = this.conv + this.suffix;
		}
    get cleanVal() {
        return this.clean_val;
    }
    get cleanConv() {
        return this.clean_conv;
    }
}


class Celsius {
		constructor(val) {
				this.val = parseFloat(val);
				this.type = "celsius";
				this.suffix = "&deg;C";
				this.conv_val = (this.val * (9 / 5)) + 32;
				this.conv_suffix = "&deg;F";

        this.rounding = (this.val % 1 !== 0);
        if (this.rounding) {
            this.val = this.val.toFixed(2);
            this.conv = this.conv_val.toFixed(2);
        }
        else {
            this.conv = this.conv_val.toFixed();
        }

        this.clean_val = this.val + this.suffix;
        this.clean_conv = this.conv + this.suffix;
		}
}


function selectVideo() {
    document.getElementsByClassName("selected")[0].setAttribute("class", "unselected");
    this.setAttribute("class", "selected");
}

var last_focused, last_input = "";
var will_delete = false;
var valid_regex = new RegExp("^[0-9\-.]*$");

function focusCheck() {
    if (last_focused !== this.id) {
        last_focused = this.id;
        document.getElementById("fahrenheit").value = "";
        document.getElementById("celsius").value = "";
        last_input = "";
    }
}

function checkInput() {

    if (will_delete) {
        var temp_val = this.value;
        document.getElementById("fahrenheit").value = "";
        document.getElementById("celsius").value = "";
        last_input = "";
        will_delete = false;
        return;
    }

    if (valid_regex.test(this.value) === false) {
        this.value = last_input;
        alert("Invalid Character: \"" + this.value + "\"");
    }
    else {
        last_input = this.value;
    }
}

function convert() {
    last_focused = "convert-button";
    var far = document.getElementById("fahrenheit");
    var cel = document.getElementById("celsius");
    var cur;

    will_delete = true;

    if (cel.value === "" && far.value !== "") {
        cur = new Fahrenheit(far.value);
        far.value = cur.cleanVal;
        cel.value = cur.cleanConv;
    }
    else if (far.value === "" && cel.value !== "") {
        cur = new Celsius(far.value);
        cel.value = cur.cleanVal;
        far.value = cur.cleanConv;
    }
    else if (far.value === "" && cel.value === ""){
        alert("You must input something to convert");
        will_delete = false;
    }
    else {
        document.getElementById("fahrenheit").value = "";
        document.getElementById("celsius").value = "";
        last_input = "";
        will_delete = false;
    }
    document.activeElement.blur();
}

function convertEnter() {
    if (event.key == "Enter") {
        convert();
    }
}
