var removeitem = document.getElementById('buy-button');
var checkout = document.getElementById('buy-button');
checkout.addEventListener("submit",checkout);
// add a listener for add to cart if such a button id is pressed
removeitem.addEventListener("click", removeCart);

function checkout()
{
if(document.getElementById('getCardNumber').value.length == 3)
{
    var element = document.getElementById("payment-success");
    element.classList.remove("d-none");
}
else 
{
    var element = document.getElementById("payment-failure");
    element.classList.remove("d-none");
}


}
function removeCart()
{
    var total=localStorage.getItem('checkout');
    total = 0;
    localStorage.setItem('checkout',total);

    var bowlerHatCounter= localStorage.getItem('addBowlerHatToCart');
    bowlerHatCounter =0;
    localStorage.setItem('addBowlerHatToCart', bowlerHatCounter);

    var fedoraCounter= localStorage.getItem('addFedoraToCart');
    fedoraCounter =0;
    localStorage.setItem('addFedoraToCart', fedoraCounter);

    var topHatCounter= localStorage.getItem('addTopHatToCart');
    topHatCounter =0;
    localStorage.setItem('addTopHatToCart', topHatCounter);

    var sportsCapCounter= localStorage.getItem('addSportsCapToCart');
    sportsCapCounter =0;
    localStorage.setItem('addSportsCapToCart', sportsCapCounter);

    var sportsCap2Counter= localStorage.getItem('addSportsCap2ToCart');
    sportsCap2Counter =0;
    localStorage.setItem('addSportsCap2ToCart', sportsCap2Counter);

    var tennisCapCounter= localStorage.getItem('addTennisCapToCart');
    tennisCapCounter =0;
    localStorage.setItem('addTennisCapToCart', tennisCapCounter);

    var paddyCapCounter= localStorage.getItem('addPaddyCapToCart');
    paddyCapCounter =0;
    localStorage.setItem('addPaddyCapToCart', paddyCapCounter);

    var cowboyHatCounter= localStorage.getItem('addCowboyHatToCart');
    cowboyHatCounter =0;
    localStorage.setItem('addCowboyHatToCart', cowboyHatCounter);

    var casualCapCounter= localStorage.getItem('addCasualCapToCart');
    casualCapCounter =0;
    localStorage.setItem('addCasualCapToCart', casualCapCounter);


    document.querySelector('#checkout').innerHTML=total;
}