// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    done = false,
    isParagraph = false;
    currentParagraph = 0;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
    "Hello World!|My name is|Adrianov"
];

// Speed (in milliseconds) of typing.
var speedForward = 200, //Typing Speed
    speedBetweenLines = 600; //Wait between first and second lines

//Run the loop
typeWriter("greetings-en", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eParagraphs = document.getElementById(id).children
  
  // Determine if animation should be typing or backspacing
  if (!done) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        eParagraphs[currentParagraph].classList.remove("cursor");
        currentParagraph++;
        eParagraphs[currentParagraph].classList.add("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        eParagraphs[currentParagraph].textContent = eParagraphs[currentParagraph].textContent + aString.charAt(i)
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      done = true;      
    }
  }
}