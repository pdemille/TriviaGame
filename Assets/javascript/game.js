    //Go to 120
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    // Shows Random Numerical Val
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Function to restart
  function restart(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  // alert and response for wins
  function winnerWinner(){
  alert("Winner Winner Chicken Dinner");
    wins++; 
    $('#wins').text(wins);
    restart();
  }
  // aler and response for losses
  function loser(){
  alert ("If you're not first you're last... and you're last.");
    losses++;
    $('#losses').text(losses);
    restart()
  }





  //  crystal functions
    //red crystal
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            winnerWinner();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    //yellow crystal
    $('.yellow').on ('click', function(){
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
    
              if (playerTotal == Random){
              winnerWinner();
            }
            else if ( playerTotal > Random){
              loser();
            } 
      })  

    //blue crystal
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            winnerWinner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  

    //green crystal
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            winnerWinner();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 
  
  