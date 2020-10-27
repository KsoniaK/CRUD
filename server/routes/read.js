//CREATION DES DEPENDANCES DE MODULES
//MODULE DE JS.NODE
const mysql = require('mysql'); //APPEL DU MODULE MYSQL QUI PERMET D AGIR SUR UNE BASE DE DONNEES
// const { request } = require('express');
const express = require("express") //APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

//IMPORT DES MODULES CREES 
let db = require('../database');//RECUPERE LES MODULES DE LA BASE DE DONNEES

//CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app= express.Router();


//TABLE PRPIORITE
app.get('/allstadium', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /allstadium
    let selectionPriorite = 'SELECT * FROM STADE'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPriorite, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//--------------------------------------------------------->

//AFFICHER LES JOUEURS
app.get('/alljoueurs', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /allstadium
    let selectionPriorite = 'SELECT * FROM JOUEUR'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPriorite, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//-------------------------------------------------------------------------------------->

app.get('/joueur', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /
    let selectionPrioriteDeux = 'SELECT * FROM JOUEUR WHERE nom_joueur = "ROONEY"'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPrioriteDeux, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//------------------------------------------------------------------->

app.get('/date', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /
    let selectionPrioriteTrois = 'SELECT DATE_FORMAT(date_naissance_joueur,"%d/%M/%Y") as dateConfirmed FROM joueur'

    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPrioriteTrois, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//------------------------------------------------------------->

app.get('/playersdetails', function (req, res) { // fonction qui fait un get 
    let namePlayer = `SELECT joueur.nom_joueur, joueur.prenom_joueur, DATE_FORMAT(joueur.date_naissance_joueur, '%d/%m/%Y') AS date_naissance, equipe.nom_equipe, poste.nom_poste 
    FROM JOUEUR 
    INNER JOIN equipe ON equipe.id_equipe = joueur.id_equipe
    INNER JOIN poste ON poste.id_poste = joueur.id_poste`
    //la requete renvera soit err soit row qui contient chaque
    db.query(namePlayer, (err, rows, fields) => {
        if (err) {
            res.send(err.message);// message provenant methode query
        } else {
            res.send(rows);
        }
    })
});


//AFFICHER TOUTES LES EQUIPES
app.get('/allequipes', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /allstadium
    let selectionEquipe = 'SELECT * FROM EQUIPE'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionEquipe, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//AFFICHER TOUS LES POST
app.get('/allpostes', function(req, res){//CHEMIN D ACCES A CET API http://localhost:3000 /allstadium
    let selectionPoste = 'SELECT * FROM POSTE'
    //LA REQUETE RENVERRA SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE ENREGISTREES...
    db.query(selectionPoste, (err, rows, fields) =>{
        //ICI SI IL Y A UNE ERREUR ON NOU LA MONTRE
        if(err){
            res.send(err.message);
        }else{
            //SI NON ON MONTRE TOUTES LES LIGNES
            res.send(rows);
        }
    })
});

//EXPORT DE LA ROUTE CREATION CREEE QUI VA DEVENIR UN MODULE
module.exports = app