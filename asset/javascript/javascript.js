var letters = ["r","a","v","i","j","o","s","h","i"];
    var wins = document.getElementById("wins");
    var losses= document.getElementById("losses");
    var guess= document.getElementById("guess");
    var wincnt=0;
    var loscnt=0;
    wins.innerText =wincnt;
    losses.innerText =loscnt;
    function guessletter()
    {
        var letterguess = letters[Math.floor(Math.random() * letters.length)];
        return  letterguess;
    }
    
   
          
   // console.log("guess letter randomly"+letterguess);
   var letterguess = guessletter();
  console.log("guess letter randomly :"+letterguess);
    
    document.onkeyup = function(event) {
           var userguess = event.key;
           
  
           debugger;
           
           
           
          
           if(letterguess==userguess){
              wincnt++;
              wins.innerText=wincnt;
             letterguess = guessletter();
             // guess.append(userguess+",");
              // var letterguess=letters.indexOf[Math.floor(Math.random() * letters.length)];
               //console.log(letterguess); 
           }
           else{
                 loscnt++;
                 losses.innerText=loscnt;
                 guess.append(userguess+",");


           }
          }
    

    



