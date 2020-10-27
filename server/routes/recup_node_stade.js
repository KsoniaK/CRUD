// IMPORT DES MODULES
import React from "react";
//IMPORT DU CSS
import "../app"

//CREATION DE MA VUE
class ListeStade extends React.Component{
    //PAS BESOIN DE CONSTRUCTEUR

    //ETAPE1: JE FAIS MON FETCH
    getStade(){
        fetch('')
        //RESPONSE
        .then(function(response){
            //console.log(responseEtatFetch.text());
            return response.json();
        })

        //DATA
        .then(function (data){
            //console.log(data);
            var output = ``;
            data.forEach ((row) =>{
                //console.log(row);
                output += `<tr><td>${row.nom_stade}</td>
                <td>${row.adresse_stade}</td>
                <td>${row.cp_stade}</td></tr>`;
            });
            document.getElementById(`liste-stade`).innerHTML += output;
        })
        //RENVOYER UNE ERREUR SI LE FICHIER FECTH N EST PAS TROUVE
        .catch(function(error){
            console.log(error);
        });
    }
    //ETAPE2 : J INDIQUE QUE MA FONCTION CONTENANT LE FETCH SE LANCERA QUAND TT LE HTML SERA CHARGE
    componentDidMount(){
        this.getStade();
    }
    //ETAPE 3:
    //DANS RENDER() JE DEFINI MON RETURN QUI CONTIENDRA L AFFICHAGE
    render(){
        return(
            <div className = "App">
                <main className="App-header">
                    
                </main>
            </div>
        )
    }
}
