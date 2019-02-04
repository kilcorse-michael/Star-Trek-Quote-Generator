//function to generate random number and return a quote from the quote[]
const getRandomQuote = () => {
const upper = quotes.length;
const randNum = Math.floor(Math.random()*upper);
  return quotes[randNum];
}

//Function to make random RGB color
const getRandomColor = () => Math.floor(Math.random()*256);


//function to change background color
const getRandomBackground = () => {
  let background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  return background;
}

//basic print function to keep printQuote function readable
const print = message => {
  var quoteBoxDiv= document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = message;
}



//function to print the quote to the screen need to clear when event listener is
const printQuote = () => {
  const randQuote = getRandomQuote();
  let message = ' ';
  const randBackground = getRandomBackground();
  document.body.style.backgroundColor = randBackground;
  document.getElementById('loadQuote').style.backgroundColor = randBackground;
  message +=`<p class='quote'>${randQuote.quote}</p>
            <p class='source'>${randQuote.source}
            <span class='citation'>${randQuote.citation}
            </span>`
  for(let key in randQuote){
    if(key === 'series'){
      message += `Television Series: ${randQuote.series}</p>`;

    }else if(key === 'film' ){
      message += `, Film: ${randQuote.film}</p>`;
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
