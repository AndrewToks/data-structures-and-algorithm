function isPrime(n){
   if(n < 2){
    return false
   }
   //If n is 0 or 1 then it is not a prime number
   for(let i = 2;i<n;i++){
    
    if(n % i == 0 ){
        return false
    }
   }
   return true
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
