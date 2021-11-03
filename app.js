var stop = document.getElementById("sound");
var button = document.getElementById("button");


button.addEventListener('mouseenter', () => {

  stop.play();
  document.body.style.backgroundColor = "DarkRed";

});

button.addEventListener('click', () =>{
    document.getElementsByClassName("text")[0].innerHTML = "It doesn't do anything tho";
});

button.addEventListener('mouseleave', () => {

  stop.pause();
  document.body.style.backgroundColor = "white";
  document.getElementsByClassName("text")[0].innerHTML = "this is a button";

});

const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
autoWah.Q.value = 6;
const synth = new Tone.Synth().connect(autoWah);

document.body.addEventListener('keydown', function(event){
  if(event.key == 'f')
  {
      synth.triggerAttackRelease("C4", "4n");
      document.body.style.backgroundColor = "LightGreen";
  }
  else if(event.key == 'g')
  {
    synth.triggerAttackRelease("E4", "4n");
    document.body.style.backgroundColor = "LightBlue";
  }
  else if(event.key == 'h')
  {
    synth.triggerAttackRelease("G4", "4n");
    document.body.style.backgroundColor = "pink";
  }
});
