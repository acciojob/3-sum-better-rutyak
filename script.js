function threeSum(arr, target) {
// write your code here
	let sum=0;
	let ans=0;
	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
		if(sum > target){
			ans=sum;
		}
	}
  return ans;
}

module.exports = threeSum;
