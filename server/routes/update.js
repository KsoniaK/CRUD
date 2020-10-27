//CREATION DES DEPENDANCES DE MODULES
//MODULE DE JS.NODE
const mysql = require('mysql'); //APPEL DU MODULE MYSQL QUI PERMET D AGIR SUR UNE BASE DE DONNEES
// const { request } = require('express');
const express = require("express") //APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

//IMPORT DES MODULES CREES 
let db = require('../database');//RECUPERE LES MODULES DE LA BASE DE DONNEES

//CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app= express.Router();

//MISE A JOUR: ON SUPPRIME LE NOM DU JOUEUR DONT L ID EST EGAL A 2
app.put('/player/:id_joueur', function (req, res) {
    let requete = `UPDATE joueur SET nom_joueur = "${req.body.nom_joueur}" WHERE id_joueur = ${req.params.id_joueur} `

    db.query(requete, (err, rows, fields) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send('La valeur saisie a bien été enregistrée')
        }
    })
})

//MISE A JOUR:
app.put('/stade/:id_stade', function (req, res) {
    let requete = `UPDATE stade SET nom_stade = "${req.body.nom_stade}" WHERE id_stade = ${req.params.id_stade} `

    db.query(requete, (err, rows, fields) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send('La valeur saisie a bien été enregistrée')
        }
    })
})

//MISE A JOUR: JOUEURS
// app.put('/joueur/:id_joueur', function (req, res) {
//     let requete = `UPDATE joueur SET nom_joueur = "${req.body.nom_joueur}" WHERE id_joueur = ${req.params.id_joueur} `

//     db.query(requete, (err, rows, fields) => {
//         if(err){
//             res.send(err.message)
//         }else{
//             res.send('La valeur saisie a bien été enregistrée')
//         }
//     })
// })


//EXPORT DE LA ROUTE CREATION CREEE QUI VA DEVENIR UN MODULE
module.exports = app