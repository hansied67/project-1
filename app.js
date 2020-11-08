class Temperature {
		constructor(val) {
				this.valid_regex = new RegExp("^[0-9\-.]*$");

				this.val, this.conv_val = 0;
				this.type, this.suffix, this.conv_suffix = "";

				if (this.constructor == Temperature) {
						throw new Error("Cannot instantiate an Abstract class.");
				}
		}
}


class Fahrenheit {
		constructor(val) {
				this.val = val;
				this.type = "fahrenheit";
				this.suffix = "&deg;F";
				this.conv_val = (val - 32) * (5 / 9);
				this.conv_suffix = "&deg;C";
		}
}


class Celsius {
		constructor(val) {
				this.val = val;
				this.type = "celsius";
				this.suffix = "&deg;C";
				this.conv_val = (val * (9 / 5)) + 32;
				this.conv_suffix = "&deg;F";
		}
}


function selectVideo() {
    document.getElementsByClassName("selected")[0].setAttribute("class", "unselected");
    this.setAttribute("class", "selected");
}

var far, cel, cur = "";
var far_input = document.getElementById("fahrenheit");
var cel_input = document.getElementById("fahrenheit");

function checkInput() {
    var last_focused = "";
		if (last_focused !== this.id && last_focused !== "") {

		}
		else {
				last_focused = this.id;
		}

    if (valid_regex.test(this.value) == false) {
        this.value = this.value.substring(0, this.value.length-1);
        alert("Invalid Character: \"" + this.value + "\"");
    }
}

function convert() {
    alert("a");
}
