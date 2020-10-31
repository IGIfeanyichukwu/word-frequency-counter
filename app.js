console.log("Word Frequency Counter");

let str, word, strArr, frequency;


const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click', handleCount,false);

function handleCount() {
	const wordInput = document.getElementById('word-input').value;
	const wordInputArr = wordInput.trim().split(' ');
	const textInput = document.getElementById('text-input').value;

	if (wordInput.length == 0 || textInput.length == 0) {
		alert('Input should not be empty');
	} else if (wordInputArr.length !== 1) {
		alert(`The input "${wordInput}" as a word should not contain spaces.`);
	} else {
		word = wordInput.trim();
		str = textInput;

		strArr = str.split(' ');

		frequency = 0;

		strArr.forEach(strElem => {
			if (strElem === word) {
				frequency++;
			}
		})

		if(frequency === 0) {
			alert(`The word "${word}" wasn't found in the text.`);
		} else if (frequency === 1) {
			alert(`The word "${word}" was found once in the text.`);
		} else {
			alert(`The word "${word}" was found ${frequency} times in the text.`);
		}

	}


}


