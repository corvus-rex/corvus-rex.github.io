// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    g = 0,
    done = false,
    glitchdone = false,
    isParagraph = false;
    currentParagraph = 0;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
    "Hello World!|My name is"
];

var glitchArray = [
    "Adrianov"
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
  console.log(ar);
  console.log(aString)
  console.log(i)
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
      
    // If full string has been typed, add glitch class to the glitch div
    } else if (i == aString.length) {
      eParagraphs[currentParagraph].classList.remove("cursor")
      done = true;
      glitchWriter("to-glitch", glitchArray, glitchArray[g]);
    }
  }
}

function glitchWriter(id, ar, gString) {
  var element = $("#" + id),
      glitchDiv = document.getElementById(id);
  
  if (done == true) {
    console.log(gString);
    console.log(ar)
    console.log(g)
    if (!glitchdone) {
      if (g < gString.length) {
        glitchDiv.classList.add("cursor");
        glitchDiv.textContent = glitchDiv.textContent + gString.charAt(g);
        g++;
        setTimeout(function(){ glitchWriter(id, ar, gString); }, speedForward);
      }
      else if (g == gString.length) {
        glitchDiv.classList.remove("cursor");
        glitchDiv.classList.remove("to-glitch");
        glitchDiv.classList.add("glitch");
        glitchDiv.setAttribute("data-content", "Adrianov");
        glitchdone = true;
      }
    }
  }
}