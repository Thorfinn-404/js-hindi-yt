let rand_num=(Math.random()*100+1).toFixed(0);
console.log(rand_num);




// const prev_guesses= new Array();
let rem_gusses=10;

const prev_guesses=document.querySelector('.previous-guesses')
const message=document.querySelector('.message')
let guesses_left=document.querySelector('.guesses-left')


const form=document.querySelector('form');
const new_game=document.querySelector('.new-game')

new_game.addEventListener('click', (e)=>{
  rem_gusses=10;
  message.innerHTML=""
  prev_guesses.textContent=""
  guesses_left.textContent=rem_gusses;
  rand_num=(Math.random()*100+1).toFixed(0);

})


form.addEventListener('submit', function(e){
  e.preventDefault()
  const guess=document.querySelector('#guess')
  takeIp(parseInt(guess.value))
  guess.value="";
})

function takeIp(ip){
  if(ip==rand_num && rem_gusses>0){
    message.innerHTML="YOU WON";
    setTimeout(function(){
      rem_gusses=10;
      guesses_left.textContent=rem_gusses
      message.innerHTML=""
      prev_guesses.textContent=""
      rand_num=(Math.random()*100+1).toFixed(0);
    },5000)
    return;
  }
  if(ip<rand_num && rem_gusses>0){
    message.innerHTML="LOW";
  }
  if(ip>rand_num && rem_gusses>0){
    message.innerHTML="HIGH";
  }

  if(rem_gusses>0){
    prev_guesses.textContent+=ip+","+" ";
    rem_gusses--;
    guesses_left.textContent=rem_gusses;
  }
  if(rem_gusses<=0){
    message.innerHTML="YOU LOSS!, Please stat a new game"
  }
}

