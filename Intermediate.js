
function largestOfFour(arr) {
    
    let largestNumbers = [];
    
    
    for (let i = 0; i < arr.length; i++) {
      
      let largest = Math.max(...arr[i]);
      
      largestNumbers.push(largest);
    }
    
    
    return largestNumbers;
  }
  
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [
  