// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var button = document.querySelector("button");
  var img = document.querySelector("img");
  var text = document.getElementById("text-to-speak");
  var talk = new SpeechSynthesisUtterance(" ");

  if(text.addEventListener) {
    text.addEventListener('input', (event) =>{
      talk= new SpeechSynthesisUtterance(text.value);
    }, false);
  }
  else if (text.attachEvent) {
    text.attachEvent('onpropertychange', function(){

    });
  }
  const synth = window.speechSynthesis;
  const inputTxt = document.querySelector('.txt');
  const voiceSelect = document.querySelectorAll('select');
  let voices = [];


  function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

button.addEventListener('click', (event) =>{
  const choice = voiceSelect.selectedOptions[0].getAttribute('data-name');

  for (let i=0; i < voices.length; i++){
    if (voices[i].name === choice) {
      talk.voice = voices[i];
    }
  }
  synth.speak(talk);
  img.src = "assets/images/smiling-open.png"
  talk.addEventListener('end', function(event) {
      img.src = "assets/images/smiling.png"
    });

});
}
