const generateHTML0 = (websiteName) => {
  console.log("Inside func call");

  return ` 
      
    <style>
  
    html, body {
      background-color: #191B1C !important;
    }
    
    </style>
  
      <body>
  
      <div style = "display: flex; align-items:center; justify-content:center;" class = "title">
  
      <h1  id = "head" style = "color:red; font-size:64px;"> GET BACK TO STUDYING! NO SOCIAL MEDIA! </h1>
  
     </div>
  
  
     <div style = "display: flex;  align-items:center; justify-content:center" class = "vid">
     
      <iframe style = "pointer-events: none;" width="560" height="315" src="https://www.youtube.com/embed/cnrxJtJcSew?start=91&autoplay=1&showinfo=0&controls=0&loop=1"   
      allow="autoplay;" frameborder="0" allowfullscreen></iframe>
  
    </div>
  
      </body>
  
      `;
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// recieve

// Read it using the storage API

console.log(window.location.hostname);

setInterval(function() {

chrome.storage.local.get(["websites"], function (items) {


  // gets rid of parenthesis/quoutes
  var formatted = items.websites.toString().slice(1, -1).replace(/['"]+/g, "");

  // splitted is an array
  var splitted = formatted.toString().split(",");

  var website1 = splitted[0];
  var website2 = splitted[1];
  var website3 = splitted[2];
  var website4 = splitted[3];
  var website5 = splitted[4];

  //console.log(items.websites.toString().slice(1, -1).replace(/['"]+/g, ""));
  //console.log(splitted);

  switch (window.location.hostname) {
    case website1:
      console.log("tyest");
      window.location.replace("https://lancema03.github.io/Redirect-Website/");
      break;
    case website2:
      console.log("tyest");
      window.location.replace("https://lancema03.github.io/Redirect-Website/");
      break;

    case website3:
      console.log("tyest");
      window.location.replace("https://lancema03.github.io/Redirect-Website/");
      break;

    case website4:
      console.log("tyest");
      window.location.replace("https://lancema03.github.io/Redirect-Website/");
      break;

    case website5:
      console.log("tyest");
      window.location.replace("https://lancema03.github.io/Redirect-Website/");
      break;
  }
});
}, 1000);

console.log("This is from main script");
