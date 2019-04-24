//function to generate random number and return a quote from the quote[]
const getRandomQuote = () => {
const upper = quotes.length;
const randNum = Math.floor(Math.random()*upper);
  return quotes[randNum];
}

//Function to make random RGB color
const getRandomColor = () => Math.floor(Math.random()*256);

const baseImg = (url) =>{
  let image = `url(${url})`
  return image
};

const printImg = ()=>{
  const baseImage = baseImg('http://justphotos.se/wp-content/uploads/2016/07/Starry-Sky-Rhodes.jpg');
  document.body.style.backgroundImage = baseImage;

};


//function to change background color
const getRandomBackground = () => {
  let background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  return background;
}

const getRandomOpBackground = () => {
  let background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}, .5)`;
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
  const opRandBackground = getRandomOpBackground();
  document.getElementById('quote-box').style.backgroundColor = opRandBackground;

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

const body = document.getElementsByTagName("body")[0];

body.style.letterSpacing = "3px";



//call the function to ensure quote is present when user loads page
printQuote();
printImg();
//Auto Refresh for quotes Function
setInterval(function(){printQuote();}, 30000);

//button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
