function letterCapitalize(str) {

    var arr;
	var strarr = str.split(" ");
	
	for (var i = 0; i < strarr.length; i++) {
		arr = strarr[i].split('');
	    arr[0] = arr[0].toUpperCase();
	    strarr[i] = arr.join('');}

    strarr = strarr.join(" ");
	return strarr;
}

console.log(letterCapitalize("hello there how are you?"));
