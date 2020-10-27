//CREATION DES DEPENDANCES DE MODULES
var mysql = require('mysql');

//CONNEXION A LA BASE DE DONNEES
const dbConnexion = mysql.createConnection({
    host: "localhost",
    database: "tournoi_foot_national",
    user: "root",
    password: "",
    port: 3306,
    // socketPath: "/tmp/mysql.sock",
    strict: false //QUAND DES VALEURS SONT NULL IL LES PREND EN COMPTE
    
})

//VERIFICATION DE LA CONNEXION A LA BASE
dbConnexion.connect((err)=>{
    if(err){
           console.log(err.message)
    }else{
        console.log("Sonia, t'es connectée à la base!")
    }
});

//LISTE DES VARIABLES QUI VONT ETRE EXPORTEES
//NOM DE L EXPERT: VARIABLES EXPORTEES
module.exports = dbConnexion