var scores, roundScores, activePlayer, gamePlaying;
initialize();


  document.querySelector('#start').addEventListener("click", function (){
      if(gamePlaying)
      {
               var dice=Math.floor(Math.random()*6)+1; 
    var diceDOM=document.querySelector('.dice'); 
   document.querySelector('.dice').style.display = 'block'; 
   diceDOM.src='dice-'+ dice+'.png';
      
      
      if (dice!==1)
          {
              roundScores += dice;    
              document.querySelector('#current--'+activePlayer).textContent=roundScores;
              
          }
      else
          {
              changePlayer();
          }
      }
  
}); 



document.querySelector('#holdadd').addEventListener("click", function(){
    if (gamePlaying)
         {
             scores[activePlayer]+=roundScores;
                  roundScores=0;
              document.querySelector('#current--'+activePlayer).textContent=0;
              document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];
              document.querySelector('.dice').style.display='none';
              if(scores[activePlayer]>=100)
                  {
                      
                      document.querySelector('#name--'+activePlayer).textContent='WINNER!';
                      document.querySelector('.dice').style.display='none';
                      document.querySelector('#section'+activePlayer).classList.add('player--winner');
                      gamePlaying = false;
                  }
              else
                  {
                     changePlayer();
                  }
         }
                  
              });
document.querySelector('#new-game-btn').addEventListener('click', function(){
                           if(scores[activePlayer]>=100)
                               {
                                   
                                   var w=activePlayer+1;
                                   document.querySelector('#name--'+activePlayer).textContent='Player '+w;
                                    document.querySelector('#section'+activePlayer).classList.remove('player--winner');
                               }
                           initialize();
                          document.querySelector('#section0').classList.add('player--active');
                           document.querySelector('#section1').classList.remove('player--active');
                         
                          
                    });


function changePlayer()
{
     if(activePlayer===0)
                  {
                      activePlayer=1;
                      
                  }
              else
                  {
                      activePlayer=0;
                  }
              roundScores=0;
              document.querySelector('#current--0').textContent=0;
              document.querySelector('#current--1').textContent=0;
              document.querySelector('#section0').classList.toggle('player--active');
              document.querySelector('#section1').classList.toggle('player--active');
              document.querySelector('.dice').style.display='none';
}
function initialize()
{
    gamePlaying=true;
    scores=[0, 0];
    roundScores=0;
    activePlayer=0;
    document.querySelector('.dice').style.display = 'none';
/*
or
document.querySelector("#current--"+activePlayer).innerHTML="<em>"+dice+"</em>";
*/
    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;
    document.querySelector('#current--0').textContent=0;
    document.querySelector('#current--1').textContent=0;
}
