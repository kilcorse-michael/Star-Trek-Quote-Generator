//Global scope variables
var message = " ";


//function to generate random number and return a quote from the quote[]

function getRandomQuote(){
var upper = quotes.length;
var randNum = Math.floor(Math.random()*upper);
  return quotes[randNum];
}

//basic print function to keep printQuote function readable

function print(message){
  var quoteBoxDiv= document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = message;
}

//function to print the quote to the screen need to clear when event listener is

//problem, need html string to clear when button is clicked
function printQuote(){
    var randQuote = getRandomQuote();

  message += "<p class='quote'>" +randQuote.quote + "</p>";
  message += "<p class='source'>" +randQuote.source + "<span class='citation'>" +randQuote.citation+ "</span></p>";
  return print(message)
}

//button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
