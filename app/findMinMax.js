module.exports = {
	findMinMax :function(arr){
	  var minMax = [];
	  var sortedArray = arr.sort(function(a, b){return a-b});
	  var min = sortedArray[0];
	  var max = sortedArray[sortedArray.length - 1];
	  if (min === max){
	  	minMax.push(min);
	  	return minMax;
	  }
	  else{
		  minMax.push(min);
		  minMax.push(max);
	  }

	  return minMax
	}
}