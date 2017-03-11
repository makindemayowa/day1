module.exports = {
  aritGeo: function(list){
  	
  	if (list.length === 0) {
      return 0;
    }
    if ((list[1] / list[0]) === (list[3]/ list[2])){
  		return "Geometric";
  	}
  	if ((list[1] - list[0]) === (list[3] - list[2])){
  		return "Arithmetic";
  	}
  	if ((list[1] / list[0]) !== (list[3]/ list[2]) || (list[1] - list[0]) !== (list[3] - list[2])){
  		return -1;
  	}
    
  }
}