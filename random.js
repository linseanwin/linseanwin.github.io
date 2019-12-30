function lottery(){
	
	var result = [];
	var count = parseInt(document.getElementById('count').value);
	var startNumber = parseInt(document.getElementById('startNumber').value);
	var endNumber = parseInt(document.getElementById('endNumber').value);
	var index=0, items=0 ,lotteryNum=0;

	items = endNumber - startNumber + 1;

	for (index; index < count ; index++) {

		lotteryNum=Math.floor(Math.random()*items)+startNumber;

		if (!checkExist(result,lotteryNum)) {
			result.push(lotteryNum);
		} else{
			index--;
		}
	}

	document.getElementById('showResult').innerHTML = result.sort().join(",");

	return true;
}

function checkExist(arrData, lotteryNum) {

	if (arrData.indexOf(lotteryNum) >= 0) {
		return true;
	} else{
		return false;
	}

	
}	

function game(){
	
}