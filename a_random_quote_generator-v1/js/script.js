//function to generate random number and return a quote from the quote[]
function getRandomQuote(){
var upper = quotes.length;
var randNum = Math.floor(Math.random()*upper);
  return quotes[randNum];
}

//Function to make random RGB color
function getRandomColor(){
  return  Math.floor(Math.random()*256);
}

//function to change background color
function getRandomBackground(){
  var background = 'rgb(';
  background += getRandomColor() + ' , ';
  background += getRandomColor() + ' , ';
  background += getRandomColor() + " ) ";
  return background;
}

//basic print function to keep printQuote function readable
function print(message){
  var quoteBoxDiv= document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = message;
}



//function to print the quote to the screen need to clear when event listener is
function printQuote(){
  var randQuote = getRandomQuote();
  var message = ' ';
  var randBackground = getRandomBackground();
  document.body.style.backgroundColor = randBackground;
  document.getElementById('loadQuote').style.backgroundColor = randBackground;
  message += "<p class='quote'>" +randQuote.quote + "</p>";
  message += "<p class='source'>" +randQuote.source;
  message += "<span class='citation'>" +randQuote.citation + "</span>"
  for(var key in randQuote){
    if(key === 'series'){
      message += ", Television Series: " +randQuote.series + "</p>";

    }else if(key === 'film' ){
      message += ", Film: " +randQuote.film + "</p>";
    }
  }


  return print(message)
}


//call the function to ensure quote is present when user loads page
printQuote();

//Auto Refresh for quotes Function
setInterval(function(){printQuote();}, 30000);

//button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
