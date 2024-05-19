function titleCase(str) {
    
    const words = str.split(' ');
    
    
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    
    return capitalizedWords.join(' ');
  }
  
  
  console.log(titleCase("I'm a little tea pot")); 
  console.log(titleCase("sHoRt AnD sToUt")); 
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); 
  