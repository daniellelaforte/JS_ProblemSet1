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


function wordCount(str) {

    var arr = str.split(" ");
    return arr.length;
}

function primeTime(num) {

    if (num%2!=0 && num%3!=0 && num%5!=0)
    	return true;
    else
    	return false;
}

console.log(letterCapitalize("hello there how are you?"));
console.log(wordCount("How many words is in this sentence?"));
console.log(primeTime(59));
