    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myImage.src ="https://i.pinimg.com/originals/16/9a/8d/169a8dfcb402415d343481e7143f932c.jpg"
        myText.innerHTML = "......"
        window.speechSynthesis.cancel();

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
        let keuze = randomizer(arrayLength);
        let keuze1 = randomizer(arrayLength);
        let keuze2 = randomizer(arrayLength);
        let woord1 = onderwerp[keuze];
        let woord2 = werkwoord[keuze1];
        let woord3 = restwoord[keuze2];
        let outputString = woord1 + " " + woord2 + " " + woord3 + ".";
        return outputString;
    }
    
    function selectThisImage(){
        let keuze3 = randomizer(arrayLength);
        myImage.src = plaatjes[keuze3]; 
    }
    
    function sayItLoud (textString) {
      window.speechSynthesis.cancel();
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["The teacher", "Leon", "she", "Ed", "Rosmerta", "Some dude", "A homeless dude"];
    const werkwoord = ["can", "is", "walks", "learns", "drinks", "is going", "has"];
    const restwoord = ["drink", "cool", "hard", "at school", "coffee", "to drive a car", "badass sum glasses"];
        
    let plaatjes = ["https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png", "https://d33wubrfki0l68.cloudfront.net/8976291c46c8d8d8f4e07c437ec614a6947b6a5f/e6679/assets/07-talk-to-your-cat.jpg", "https://cdn.discordapp.com/attachments/749995981273038889/783980032455475217/Capture1.PNG", "https://www.logochoc.nl/media/catalog/product/cache/1/thumbnail/600x/78423f1769557a712fc4e36a50eb9271/i/_/i_like_duim-4030_copy.jpg", "https://www.leeuwarderstudentenkrant.nl/wp-content/uploads/2013/12/zwervers.jpg", "https://indebuurt.nl/utrecht/wp-content/uploads/2020/02/79203738_3152443611432451_326641097608527872_o.jpg", "https://www.lion-art.nl/Files/6/97000/97535/ProductPhotos/MaxContent/567411834.jpg"]
    let arrayLength = onderwerp.length;
