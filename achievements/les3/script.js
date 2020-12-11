    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let indexow = randomizer(arrayLength);
        let indexww = randomizer(arrayLength);
        let indexrw = randomizer(arrayLength);
        let woord1 = onderwerp[indexow];
        let woord2 = werkwoord[indexww];
        let woord3 = restwoord[indexrw];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Simon", "Sinterklaas", "Santa"];
    const werkwoord = ["walks", "jumps", "works"];
    const restwoord = ["to school", "high", "hard"];
        
    let plaatjes = ["https://i.kym-cdn.com/entries/icons/original/000/035/644/juancover.jpg", "https://i.redd.it/m9a25imgomf51.jpg", "https://preview.redd.it/xenm9jlrjh461.jpg?width=960&format=pjpg&auto=webp&s=1267919256de110b2f31441084dfa887d2340f81"]
    let arrayLength = onderwerp.length;
