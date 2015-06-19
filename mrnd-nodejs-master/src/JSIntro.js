
exports.Sum = function(num1, num2){
	return num1 + num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for(var i=0,len=arrayOfNums.length;i<len;i++)
	{
		sum=sum+arrayOfNums[i];
		}
		return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum=0,c=0,k=0;
	var arr=[];
	var len1=arrayOfNums.length;
	
	for(var i=0;i<len1;i++)
	{ c=0;
		for(var j=0;j<arr.length;j++)
		{
			if(arr[j]==arrayOfNums[i])
				c++;
		}
		if(c==0)
			arr[k++]=arrayOfNums[i];
		
	}
	for(var i=0,len=arr.length;i<len;i++)
	{
		sum=sum+arr[i];
		}
		return sum;
}

exports.ReverseString = function(str){
	var rev="";
	for(var i=str.length-1;i>=0;i--)
	{
		rev=rev+str[i];
	}
	return rev;

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
for(var i=0;i<arrayOfStrings.length;i++)
{
		var rev="";
	for(var j=arrayOfStrings[i].length-1;j>=0;j--)
	{
		rev=rev+arrayOfStrings[i][j];
	}
	arrayOfStrings[i]=rev;

}
return arrayOfStrings;

}