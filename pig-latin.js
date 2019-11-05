function translatePigLatin(str) {
  var emptyString = "";
  var regex = /[aeiou]/gi;
    if (str[0].match(regex)) {
      emptyString = str + \"way\";
    } else if (str.match(regex) === null) {
        emptyString = str + "ay";  } else {
          var firstVowel = str.indexOf(str.match(regex)[0]);
         emptyString = str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
      return emptyString; 
        
   }

