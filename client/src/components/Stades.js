import React from 'react';

class Stades extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stades: []
        }
    }

        componentDidMount(){
        fetch("read/allstadium")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({stades : data})
            
        })
    }
    
    render(){
        return(
           <div>
            <h2>Liste des Stades</h2>
            {this.state.stades.map((stade, i) => {
                 return <div key={i}>{stade.nom_stade}, {stade.adresse_stade}, {stade.cp_stade}, {stade.pays_stade}</div>
            })}
          </div>
        )

    }

}
export default Stades;