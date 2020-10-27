import React from 'react';

class Joueur extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            joueurs: []
        }
    }

    
    handleSubmit = (id) =>{
        let d = window.confirm("Voulez-vous vraiment supprimer ce joueur?")
        // let b = window.location.reload(true);
        if(d) {
            fetch("delete/deljoueur/" + id,
                    {method: 'DELETE', headers: {'content-type': 'application/json'},
                    body: JSON.stringify({joueurs: this.state.joueurs})})
                    .then((response) => {
                        this.props.history.push('/joueur');
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data)
                        this.setState({joueurs : data})
                        (data.success)
                        
                    })
                    //recharger ma page apres suppression
                    window.location.reload();       
                }
    }

    

    componentDidMount(){
        fetch("read/alljoueurs")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)
            this.setState({joueurs : data})
        })
    }
    
        
    render(){
        return(
           <div>
            <h2>Liste des Joueurs</h2>
            {this.state.joueurs.map((joueur, i) => {
                 return <div key={i}>{joueur.nom_joueur}, {joueur.prenom_joueur}, {joueur.numero}, {joueur.date_naissance_joueur}
                             <button
                                    onClick={() =>
                                    this.handleSubmit(
                                        joueur.id_joueur
                                        // joueur.prenom_joueur,
                                        // joueur.nom_joueur
                                    )}>
                                        Supprimer
                                </button>
                        </div>
                })}
          </div>
        )
    }
}
export default Joueur;