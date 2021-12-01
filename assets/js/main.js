var coursBTC= document.getElementById('coursBTC'), erreur= document.getElementById('erreur'), coursEUR= document.getElementById('coursEUR');
     
    function request(){
 
     var req = new XMLHttpRequest();
 
     req.open("GET", "https://blockchain.info/tobtc?currency=EUR&value=1");

     req.addEventListener("load", function () {
         if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            var btc = req.responseText
             coursBTC.innerHTML= (1/btc).toFixed(2);
             coursEUR.innerHTML= req.responseText
             erreur.innerHTML="";
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
    setInterval(request, 5000);

function verify(){
test.innerHTML ="C'est bon !"
}