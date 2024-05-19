//1

function findLongestWord(sentence) {
    
    const words = sentence.split(' ');
    
    
    let longestLength = 0;
    
    
    for (let i = 0; i < words.length; i++) {
      
      let currentLength = words[i].length;
      
      
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
    
   
    return longestLength;
  }
  
 
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
  console.log(findLongestWord("May the force be with you"));
  