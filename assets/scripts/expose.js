// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.getElementById('horn-select');
  select.addEventListener('change', (event) => {
    const horn = document.querySelector("img");
    if(select.value == "air-horn"){
      horn.src = "assets/images/air-horn.svg";
    }
    else if(select.value == "car-horn"){
      horn.src =  "assets/images/car-horn.svg";
    }
    else{
      horn.src = "assets/images/party-horn.svg";
    }
  });

  const volume = document.getElementById('volume');
  select.addEventListener('change', (event) =>{
  const sound = document.images[1];
  if(volume.value == 0) {
    sounds.src = "assets/icons/volume-level-0.svg";
  }
  else if(volume.value < 33) {
    sounds.src = "assets/icons/volume-level-1.svg";
  }
  else if(volume.value < 67) {
    sounds.src = "assets/icons/volume-level-2.svg";
  }
  else if(volume.value > 67) {
    sounds.src = "assets/icons/volume-level-3.svg";
  }
  });

  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    const vol = document.getElementById('volume');
    const res = document.querySelector("audio");
    res.volume = (vol.value) / 100;

    if(select.value == "air-horn"){
      res.src =  "assets/audio/air-horn.mp3"
      res.play()
    }
    else if(select.value == "car-horn"){
      res.src =  "assets/audio/car-horn.mp3"
      res.play()
    }
    else if (select.value == "party-horn"){
     res.src =  "assets/audio/party-horn.mp3"
     const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
     res.play()
    }


  });

}