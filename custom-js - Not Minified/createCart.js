
  //var addTopHat = document.getElementById('addTopHatPeanut');   
topHatPeanut();



function topHatPeanut()
  {
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
    } else {
        window.location.href = "login.html";
    }
    var totalCost = 0;
    localStorage.setItem('total', totalCost);

    var bowlerHatCounter= localStorage.getItem('addBowlerHatToCart');
    console.log("Bowler Hat Counter: "+bowlerHatCounter);

    var fedoraCounter= localStorage.getItem('addFedoraToCart');
    console.log("Fedora Counter: "+fedoraCounter);

    var topHatCounter= localStorage.getItem('addTopHatToCart');
    console.log("Top Hat Counter: "+topHatCounter);

    var sportsCapCounter = localStorage.getItem('addSportsCapToCart');
    console.log("Sports Cap Counter: "+sportsCapCounter);

    var sportsCap2Counter = localStorage.getItem('addSportsCap2ToCart');
    console.log("Sports Cap 2 Counter: "+sportsCap2Counter);

    var tennisCapCounter= localStorage.getItem('addTennisCapToCart');//
    console.log("Tennis Cap Counter: "+tennisCapCounter);

    var paddyCapCounter= localStorage.getItem('addPaddyCapToCart');
    console.log("Paddy Cap Counter: "+paddyCapCounter);

    var cowboyHatCounter= localStorage.getItem('addCowboyHatToCart');
    console.log("Cowboy Hat Counter: "+cowboyHatCounter);

    var casualCapCounter= localStorage.getItem('addCasualCapToCart');
    console.log("Casual Cap Counter: "+casualCapCounter);

    
    
    while(bowlerHatCounter >= 1)
    {
      createCart(0,'addBowlerHatToCart');
      bowlerHatCounter--;
    } 
    while(fedoraCounter >= 1)
    {
      createCart(1,"addFedoraToCart");
      fedoraCounter--;
    }
    while(topHatCounter >= 1)
    {
      createCart(2,"addTopHatToCart");
  
      topHatCounter--;

    }
    while(sportsCapCounter >= 1)
    {
      createCart(3,"addSportsCapToCart");
  
      sportsCapCounter--;
    } 
    while(sportsCap2Counter >= 1)
    {
      createCart(4,"addSportsCap2ToCart");
  
      sportsCap2Counter--;
    }
    while(tennisCapCounter >= 1)
    {
      createCart(5,"addTennisCapToCart");
  
      tennisCapCounter--;
    }
    while(paddyCapCounter >= 1)
    {
      createCart(6,"addPaddyCapToCart");
  
      paddyCapCounter--;
    }
    while(cowboyHatCounter >= 1)
    {
      createCart(7,"addCowboyHatToCart");
  
      cowboyHatCounter--;
    }
    while(casualCapCounter >= 1)
    {
      createCart(8,"addCasualCapToCart");
  
      casualCapCounter--;
    }
   

  }
  function removeTopHat(number,price,hat)
  {
    const counterName = ['addBowlerHatToCart','addFedoraToCart','addTopHatToCart','addSportsCapToCart','addSportsCap2ToCart','addTennisCapToCart','addPaddyCapToCart','addCowboyHatToCart','addCasualCapToCart'];
   // var bowlerHatCounter= localStorage.getItem('addBowlerHatToCart');
    console.log(hat);
    var refreshCounter = localStorage.getItem(counterName[hat]);
    refreshCounter--;
    localStorage.setItem(counterName[hat],refreshCounter);
    document.getElementById(`${number}`).remove();
    let totalPrice = document.getElementById('totalCost');
    
    totalCost = localStorage.getItem('total');
totalCost = +totalCost - +price;
totalPrice.innerHTML="Total Cost: €" + totalCost ;
localStorage.setItem('total', totalCost);

var total=localStorage.getItem('checkout');
total--;
localStorage.setItem('checkout',total);
document.querySelector('#checkout').innerHTML=total;

   // var topHatCounter= localStorage.getItem('addTopHatToCart');
    //topHatCounter--;
    //topHatCounter=localStorage.setItem('addTopHatToCart',topHatCounter);
   // console.log(topHatCounter);
  }
  function createCart(number,hat)
  {
    var name = hat;
    var counter = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter',counter);
    let totalPrice = document.getElementById('totalCost');
    const hatNames = ["Bowler Hat","Fedora","Top Hat","Sports Cap","Breathing Sports Cap","Tennis Cap","Paddy Cap","Cowboy Hat","Casual Cap"]
    const hatImgs = ["images/bowlerHat.jpg","images/fedoraHat.png","images/topHatShop.jpg","images/sportsCap.jpg","images/sportsCap2.jpg","images/tennisCap.jpg","images/paddyCap.jpg","images/cowboyHat.jpg","images/casualCap.jpg"];
    const hatPrice = [75.00,95.00,80.00,20.00,25.00,13.00,120.00,5.00,30.00]
    

let existingDiv = document.getElementById('div1');

let newFirstDiv = document.createElement("div");

newFirstDiv.style.width ="1300px";
newFirstDiv.setAttribute("class","card mb-3");

newFirstDiv.setAttribute('id',`${counter}`);

let newSecondDiv = document.createElement('div');
newSecondDiv.setAttribute("class","row g-0");

let newThirdDiv = document.createElement('div');
newThirdDiv.setAttribute("class","col-md-4");

//inside the third div 
let newImage = document.createElement('img');
newImage.src=hatImgs[number];
newImage.setAttribute("class","img-fluid rounded-start");



//new div
let newFourthDiv = document.createElement('div');
newFourthDiv.setAttribute("class","col-md-8");

let newFifthDiv = document.createElement('div');
newFifthDiv.setAttribute("class","card-body");

let newH5 = document.createElement('h5');
newH5.setAttribute("class","card-title");
newH5.innerHTML=hatNames[number];

let newPara = document.createElement('p');
newPara.setAttribute("class","card-text");
newPara.innerHTML="Cost: €" + hatPrice[number];
totalCost = localStorage.getItem('total');
totalCost = +totalCost + +hatPrice[number];
totalPrice.innerHTML="Total Cost: €" + totalCost ;
localStorage.setItem('total', totalCost);

console.log(name);
//<button class="btn btn btn-outline-primary" id="removeFromCartBtn" href="#"  type="button">Remove from cart</button>
let newBtn = document.createElement('button');
newBtn.setAttribute("class","btn btn btn-outline-primary");
newBtn.setAttribute("onclick",`removeTopHat(${counter},${hatPrice[number]},${number})`);
newBtn.innerHTML="Remove from cart";



newFifthDiv.appendChild(newH5);
newFifthDiv.appendChild(newPara);
newFifthDiv.appendChild(newBtn);
newFourthDiv.appendChild(newFifthDiv);
newThirdDiv.appendChild(newImage);
newSecondDiv.appendChild(newThirdDiv);
newSecondDiv.appendChild(newFourthDiv);
newFirstDiv.appendChild(newSecondDiv);
existingDiv.appendChild(newFirstDiv);
  }
