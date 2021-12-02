var coursBTC= document.getElementById('coursBTC'), erreur= document.getElementById('erreur'), coursEUR= document.getElementById('coursEUR');
var cnt = 0

function request(){
var req = new XMLHttpRequest();
    req.open("GET", "https://blockchain.info/tobtc?currency=EUR&value=1");
    req.addEventListener("load", 
        function () {
            if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            
            var btc = req.responseText

            coursBTC.innerHTML= (1/btc).toFixed(2)   // 1 BTC en x EUR
            coursEUR.innerHTML= req.responseText     // 1 EUR en x BTC

            erreur.innerHTML="";                     // Il n'y a pas d'erreur

            } else {
                // Affichage des informations sur l'échec du traitement de la requête
                erreur.innerHTML= "Erreur: " + req.status + " " + req.statusText;
            }
     });

     req.addEventListener("error", function (){
        // La requête n'a pas réussi à atteindre le serveur
        erreur.innerHTML="Erreur reseau";
        
     });
     req.send(null);
     
    }

    setInterval(request, 500);

function verify(){
    cnt+=1
    if (cnt <= 25){
        test.innerHTML="C'est bon !"
    } else {
        test.style.color="blue"
        test.innerHTML="YAMETE"
    }
}