var alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

var displayAlphabet="";

function stackLetters (theAlphabetArray){
	for (var i=0; i <theAlphabetArray.length; i++){
		displayAlphabet += theAlphabetArray[i];

		 if ((i+1) % 3 === 0){
			displayAlphabet +=  " ";
		} 

		console.log(displayAlphabet);
	}	
};

stackLetters(alphabet);