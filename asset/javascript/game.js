var letters = ["r","a","v","i","j","o","s","h","i"];
    var wins = document.getElementById("wins");
    var losses= document.getElementById("losses");
    var guess= document.getElementById("guess");
    var guessleft = document.getElementById("guessleft");
    var wincnt=0;
    var loscnt=0;
    var gsleft= letters.length;
    wins.innerText =wincnt;
    losses.innerText =loscnt;
    guessleft.innerHTML=gsleft;
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
           
  
             
           
           
          
           if(letterguess==userguess){
              wincnt++;
              wins.innerText=wincnt;
             letterguess = guessletter();
             // guess.append(userguess+",");
              // var letterguess=letters.indexOf[Math.floor(Math.random() * letters.length)];
               //console.log(letterguess); 
           }
           else{
                 
                 gsleft--;
                 guess.append(userguess+",");
                 guessleft.innerText=gsleft; 
                  if(gsleft<0)
                  {
                    loscnt++;
                    losses.innerText=loscnt;
                    gsleft= letters.length;
                  }
           }
          }
    

    



