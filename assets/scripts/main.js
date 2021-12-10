var coursBTC =  document.getElementById('coursBTC'), 
                erreur = document.getElementById('erreur'), 
                coursEUR = document.getElementById('coursEUR'),
                storage = document.getElementById('storage');
let tableau = [];


function request() {
var req = new XMLHttpRequest();
req.open("GET", "https://blockchain.info/tobtc?currency=EUR&value=1");

    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            var btc = req.responseText
            coursBTC.innerHTML = (1 / btc);
            coursEUR.innerHTML = req.responseText
            erreur.innerHTML = "";
        }

        else {
            // Affichage des informations sur l'échec du traitement de la requête
            erreur.innerHTML = "Erreur: " + req.status + " " + req.statusText;
        }
    });

    req.addEventListener("error", function () {
        // La requête n'a pas réussi à atteindre le serveur
        erreur.innerHTML = "Erreur reseau";
    });
    req.send(null);
}

function stockage () {

  var requ = new XMLHttpRequest();
  requ.open("GET", "https://blockchain.info/tobtc?currency=EUR&value=1");
  requ.addEventListener("load", function(){

    if (requ.status >= 200 && requ.status < 400) { // Le serveur a réussi à traiter la requête
    tableau.push(requ.responseText)
    //verify
    }

    if (tableau.length > 10){
      tableau.shift()
    }
    console.log(tableau)
    console.log(tableau.length)
    storage.innerHTML = tableau

  })

  requ.send(null)
  // return tableau
}


request()
stockage()

setInterval(request, 60000);
setInterval(stockage, 10000);