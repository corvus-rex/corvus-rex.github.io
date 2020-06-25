$(document).ready(function() {

    var mrain = document.getElementById("matrix-rain");
    var ctx = mrain.getContext("2d");

    //making the canvas full screen
    mrain.height = window.innerHeight;
    mrain.width = window.innerWidth;

    //Hexadecimal characters to represent the Matrix rain effect
    var hexadecimal = "0123456789ABCDEF";
    //converting the string into an array of single characters
    hexadecimal = hexadecimal.split("");
    
    var font_size = 15;
    var columns = mrain.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, mrain.width, mrain.height);

        ctx.fillStyle = "#39FF14";//neon green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random hexadecimal character to print
            var text = hexadecimal[Math.floor(Math.random()*hexadecimal.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > mrain.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 35);

    // when browser size is resized, readjust the number of columns and drops
    window.addEventListener("resize", function() {
        mrain.height = window.innerHeight;
        mrain.width = window.innerWidth;
        columns = mrain.width/font_size;
        drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = 1;
    });
});

