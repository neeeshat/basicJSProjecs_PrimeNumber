//finding the prime number
// with decreasing the run time by using break 
// and using i < parseInt(num**0.5)+1 instead of i<n
// test with this 1000000007  which is a prime number


function isPrime(num)
{
	//let num = 1000000007;

let i=2;
let isPrime =true;


while (i < parseInt(num**0.5)+1) 
{
	if(num % i ==0)
	{
		isPrime =false;
		console.log(isPrime);
		console.log(`${num} is divided by ${i}`);
		break;

	}
	i ++;	
}
if (isPrime)
	console.log(`${num} is a prime number`);
else 
	console.log(`as a result ${num} is not a prime number`);
		
}

isPrime(8);
isPrime(1000000007);
isPrime(897766645379);