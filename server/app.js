//CREATION DES DEPENDANCES DE MODULES
//MODULE DE JS.NODE
//const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlApostrophe = require("mysql-apostrophe");

// //MISE EN PLACE DE msqlApostrophe
// app.use(mysqlApostrophe); //PERMET D INSERER DES CHAMPS CONTENANT DES APOSTROPHES

//RECUPERATION DES FICHIERS ROUTES DANS LE DOSSIER ROUTES
const lecture = require("./routes/read");
const ajouter = require("./routes/create")
const apostrophe = require("./routes/update")
const supprimer = require("./routes/delete")


//MISE EN PLACE DU BODYPARSER QUI PERMET DE LIRE LES JSON ET LES URL ENVOYES PAR LES FORMULAIRES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(mysqlApostrophe);

//UTILISATION DES ROUTES
app.use("/read", lecture);
app.use("/create", ajouter);
app.use("/apostrophe", apostrophe);
app.use("/delete", supprimer);

//------------------------------------------//
//  Lignes qui servent pour le déploiement  //
//------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require('path'); 
// 2°) Préciser que Express va chercher des infos dans le dossiers build
app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.static("public"));
// 3°) Préciser que Express va chercher des app en utilisant le préfixe "/""
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//------------------------------------------//
//    Fin des lignes pour le déploiement    //
//------------------------------------------//

//CHOIX DU PORT UTILISE PAR LE SERVEUR
const port = process.env.PORT || 3001; //RECUPERE LE PORT LIBRE SI NON 
app.listen(port, function(){
    console.log("Ok ça marche");
    console.log("Le serveur utilise le port: " + port)
});




