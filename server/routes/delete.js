//CREATION DES DEPENDANCES DE MODULES
//MODULE DE JS.NODE
const mysql = require('mysql'); //APPEL DU MODULE MYSQL QUI PERMET D AGIR SUR UNE BASE DE DONNEES
// const { request } = require('express');
const express = require("express") //APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

//IMPORT DES MODULES CREES 
let db = require('../database');//RECUPERE LES MODULES DE LA BASE DE DONNEES

//CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app= express.Router();


//SUPPRESSION: ON SUPPRIME LE JOUEUR DONT L ID EST LE 3
app.delete('/player_delete/:id_joueur', function (req, res) {
    let requete = `DELETE FROM joueur WHERE id_joueur = ${req.params.id_joueur} `
    db.query(requete, (err, rows, fields) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send('La valeur saisie a bien été enregistrée')
        }
    })
})
//VERSION 1 DU DELETE
app.delete("/deljoueur/:idSaisie", function(req, res){
    let paramUrl = req.params.idSaisie
    let verifId = `SELECT * FROM JOUEUR WHERE id_joueur=${paramUrl}`
    db.query(verifId, (err, rows) =>{
        if(err){
            console.log(err.message);
            res.send(err.message);
        }else if (rows.length == 0) {
            res.send("L'id saisie n'existe pas");
            console.log(`Nb lignes supp ${rows.length}`);
        }else{
            let suppJoueur = `DELETE FROM JOUEUR WHERE id_joueur=${paramUrl}`;
            db.query(suppJoueur, (errTwo, rowTwo) =>{
                if (errTwo){
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                }else{
                    console.log(`Le joueur ${paramUrl} a bien été supprimé de la BDD`);
                    console.log(`Nb lignes supp ${rows.length}`)
                    res.send(`Le joueur ${paramUrl} a bien été supprimé de la BDD`)
                }
            })
        }
    })
})

//VERSION 2
app.delete('/deljoueurv2/:idRecu', function (req, res){
    let paramUrl = req.params.idRecu
    let requete = `DELETE FROM JOUEUR WHERE id_joueur=${paramUrl}`
    //LA REQUETE ENVERRA: SOIT UNE ERREUR "err" SOIT UN RESULTAT "row" QUI CONTIENT CHAQUE LIGNE D ENREGISTREE
    db.query(requete, (err, rows)=>{
        if(err){
            console.log(err.message)
            res.send(err.message);
        }else{
            //JE VERIFIE QUE LA REQUETE A BIEN ENGENDRE UNE MISE A JOUR
            let nbLignesModif = rows.affecteRows
            if (nbLignesModif == 0){
                console.log(`Nb lignes supp ${rows.length}`);
                res.send(`${nbLignesModif} ligne modifiée : l'ID "${paramUrl}" n'existe pas`)
            }else{
                console.log(`${nbLignesModif} ligne modifiée : le joueur ayant l'ID "${paramUrl}" a été supprimé`);
                res.send(`${nbLignesModif} ligne modifiée : le joueur ayant l'ID "${paramUrl} a été supprimé`);
            }
        }
    })
})

//EXPORT DE LA ROUTE CREATION CREEE QUI VA DEVENIR UN MODULE
module.exports = app