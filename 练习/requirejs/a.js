define(['b'],function(isArray){
	function sortArray(arr){
		if(isArray(arr)){
			return arr.sort(function(a,b){
			return a-b;	
			//return Math.random()-0.5;	--随机排序	
			})
		}else{
			return '不是数组';
		}	
	}
	return sortArray;	
})