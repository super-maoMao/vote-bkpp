function numberGen(min, max){
	var difference = max - min + 1;
	var addend = Math.floor(Math.random() * difference); // The range of Math.random() is [0,1)
	return min + addend;
}

function stringGen(type, length){
	var numbers = "0123456789";
	var chars = "abcdefhijkmnprstwxyz123456789";
	var letters = "abcdefghijklmnopqrstuvwxyz";
	var string_generated = "";
	if (type == "number"){
		for (i = 0; i < length; i++) {
			string_generated += numbers.charAt(numberGen(0, numbers.length - 1));
		}
		return string_generated;
	} else if (type == "mix"){
		for (i = 0; i < length; i++) {
			string_generated += chars.charAt(numberGen(0, chars.length - 1));
		}
		return string_generated;
	} else if (type == "name") {
		for (i = 0; i < length; i++) {
			string_generated += letters.charAt(numberGen(0, chars.length - 1));
		}
		return string_generated;
	}
	else {
		return "F";
	}
}

function phoneNumGen() {
	var prefix = Math.random() < 0.5 ? "08" : "09";
	var suffix = stringGen("number", 8);
	return prefix + suffix;
}

function emailGen() {
	var account = stringGen("mix", 10);
	var email_domains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@163.com", "@foxmail.com"];
	return account + email_domains[numberGen(0, 4)];
}

function provinceGen() {
	return provinces[Math.floor(Math.random() * provinces.length)];
}

function ipGen() {
	return {
    	ip: "1.46." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256)
	}
}
