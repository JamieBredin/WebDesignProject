// shop.js


        //var additem = document.getElementById('addtocart');
        // add a listener for add to cart if such a button id is pressed
       // additem.addEventListener("click", addToCart);
        
        var addDiv = document.getElementById('addBowlerHatToCart');
        addDiv.addEventListener("click",addBowlerHatToCart);
        
        var addFedora = document.getElementById('addFedoraToCart');
        addFedora.addEventListener("click", addFedoraToCart);
        
        var addTopHat = document.getElementById('addTopHatToCart');
        addTopHat.addEventListener("click", addTopHatToCart);

        var addSportsCap = document.getElementById('addSportsCapToCart');
        addSportsCap.addEventListener("click", addSportsCapToCart);
    
        var addSportsCap2 = document.getElementById('addSportsCap2ToCart');
        addSportsCap2.addEventListener("click", addSportsCap2ToCart);
       
        var addTennisCap = document.getElementById('addTennisCapToCart');
        addTennisCap.addEventListener("click", addTennisCapToCart);

        var addPaddyCap = document.getElementById('addPaddyCapToCart');
        addPaddyCap.addEventListener("click", addPaddyCapToCart);

        var addCowboyHat = document.getElementById('addCowboyHatToCart');
        addCowboyHat.addEventListener("click", addCowboyHatToCart);

        var addCasualCap = document.getElementById('addCasualCapToCart');
        addCasualCap.addEventListener("click", addCasualCapToCart);


function addBowlerHatToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    console.log("Checkout Counter: " + total);
    
    var bowlerHatCounter= localStorage.getItem('addBowlerHatToCart');
    bowlerHatCounter++;
    localStorage.setItem('addBowlerHatToCart',bowlerHatCounter);
    console.log("Bowler Hat Counter: "+bowlerHatCounter);
}
function addFedoraToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var fedoraCounter= localStorage.getItem('addFedoraToCart');
    fedoraCounter++;
    localStorage.setItem('addFedoraToCart',fedoraCounter);

    console.log("Fedora Counter: " + fedoraCounter);
}
function addTopHatToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    
    var topHatCounter= localStorage.getItem('addTopHatToCart');
    topHatCounter++;
    localStorage.setItem('addTopHatToCart',topHatCounter);


    console.log("Top Hat Counter: "+topHatCounter);
}
function addSportsCapToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var sportsCapCounter= localStorage.getItem('addSportsCapToCart');
    sportsCapCounter++;
    localStorage.setItem('addSportsCapToCart',sportsCapCounter);

    console.log("Sports Cap Counter: " + sportsCapCounter);
}
function addSportsCap2ToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var sportsCap2Counter= localStorage.getItem('addSportsCap2ToCart');
    sportsCap2Counter++;
    localStorage.setItem('addSportsCap2ToCart',sportsCap2Counter);

    console.log("Sports Cap 2 Counter: " + sportsCap2Counter);
}
function addTennisCapToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var tennisCapCounter= localStorage.getItem('addTennisCapToCart');
    tennisCapCounter++;
    localStorage.setItem('addTennisCapToCart',tennisCapCounter);

    console.log("Tennis Cap Counter: " + tennisCapCounter);
}
function addPaddyCapToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var paddyCapCounter= localStorage.getItem('addPaddyCapToCart');
    paddyCapCounter++;
    localStorage.setItem('addPaddyCapToCart',paddyCapCounter);

    console.log("Paddy Cap Counter: " + paddyCapCounter);
}
function addCowboyHatToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var cowboyHatCounter= localStorage.getItem('addCowboyHatToCart');
    cowboyHatCounter++;
    localStorage.setItem('addCowboyHatToCart',cowboyHatCounter);

    console.log("Cowboy Hat Counter: " + cowboyHatCounter);
}
function addCasualCapToCart()
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    
    var casualCapCounter= localStorage.getItem('addCasualCapToCart');
    casualCapCounter++;
    localStorage.setItem('addCasualCapToCart',casualCapCounter);

    console.log("Casual Cap Counter: " + casualCapCounter);
}