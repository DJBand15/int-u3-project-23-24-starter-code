// Declare variables below to save the different divs of your story.
 document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
      document.querySelector('.story-opening').style.display = "block";
        document.querySelector('.option-one').style.display = "block";
        document.querySelector('.option-two').style.display = "block";
        document.querySelector('.option-three').style.display = "block";
          document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
         document.querySelector('.option-zero').style.display = "none";

// const music = new Audio('./music.mp3.mp3');
// music.muted = false;
// music.volume = 1;
// music.loop = true;

// // 2. Play it immediately on load
// music.play()
//     .then(() => {
//         console.log("Autoplay started successfully.");
//     })
//     .catch(error => {
//         console.log("Autoplay was blocked:", error);
//     });

document.querySelector('.option-zero').addEventListener('click', function(){
 document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
      document.querySelector('.story-opening').style.display = "block";
        document.querySelector('.option-one').style.display = "block";
        document.querySelector('.option-two').style.display = "block";
        document.querySelector('.option-three').style.display = "block";
          document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
 document.querySelector('.option-zero').style.display = "none";
 document.querySelector('.option-one-end').style.display = "none";
 document.querySelector('.option-two-end').style.display = "none";
 document.querySelector('.option-three-end').style.display = "none";
});



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

// Button One Click
document.querySelector('.option-one').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "block";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
      document.querySelector('.story-opening').style.display = "none";
        document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "block";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
         
});

// Button Two Click
document.querySelector('.option-two').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "block";
    document.querySelector('.option-three-screen').style.display = "none";
     document.querySelector('.story-opening').style.display = "none";
     document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "block";
        document.querySelector('.option-six').style.display = "none";
        
});

// Button Three Click
document.querySelector('.option-three').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "block";
        document.querySelector('.story-opening').style.display = "none";
        document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "block";
      
});
document.querySelector('.option-four').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
        document.querySelector('.story-opening').style.display = "none";
        document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
        document.querySelector('.option-one-end').style.display = "block";
        document.querySelector('.option-zero').style.display = "block";
});
document.querySelector('.option-five').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
        document.querySelector('.story-opening').style.display = "none";
        document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
        document.querySelector('.option-two-end').style.display = "block";
        document.querySelector('.option-zero').style.display = "block";
});
document.querySelector('.option-six').addEventListener('click', function(){
    document.querySelector('.option-one-screen').style.display = "none";
    document.querySelector('.option-two-screen').style.display = "none";
    document.querySelector('.option-three-screen').style.display = "none";
        document.querySelector('.story-opening').style.display = "none";
        document.querySelector('.option-one').style.display = "none";
        document.querySelector('.option-two').style.display = "none";
        document.querySelector('.option-three').style.display = "none";
        document.querySelector('.option-four').style.display = "none";
        document.querySelector('.option-five').style.display = "none";
        document.querySelector('.option-six').style.display = "none";
        document.querySelector('.option-three-end').style.display = "block";
        document.querySelector('.option-zero').style.display = "block";
});