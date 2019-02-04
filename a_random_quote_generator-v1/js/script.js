//Global scope variables



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
    var message = " ";
  document.body.style.backgroundColor = getRandomBackground();
  message += "<p class='quote'>" +randQuote.quote + "</p>";
  message += "<p class='source'>" +randQuote.source + "<span class='citation'>" +randQuote.citation+ "</span></p>";
  return print(message)
}

//button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
