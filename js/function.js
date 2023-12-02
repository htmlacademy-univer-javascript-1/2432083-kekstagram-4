 function strLength(str, num) { 
     if (str.length <= num) { 
         return true;
     } else { 
         return false;
     } 
 }
 console.log(strLength("dfgasdfasfasf", 10));

 function palindrom (word) {
     let length = 1; 
     for (let i = 0; i < (word.length); i += 0) { 
         for (let j = (word.length - 1); j > 0; j--) {
             if (word[i] != word[j]) { 
                 return false
                 break
             }

             if ((length == word.length)) { 
                 return true
             }

             length += 1;
             i++; 
         }
     }
 }

 console.log(palindrom('ванна'))