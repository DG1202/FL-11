function reverseNumber(num) {
	let strNum = num.toString();
	let reverseStrNum = '';
	for (let i = strNum.length - 1; i >= 0; i--) {
		reverseStrNum += strNum[i];
	}
	return Math.sign(num) * parseInt(reverseStrNum);
}

reverseNumber(5);