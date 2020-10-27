import React from 'react';


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            equipes: [],
            postes: []
        }
    }

    handleChange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

   
    
    handleSubmit = () =>{
        fetch("create/newjoueur",
        {method: 'POST', headers: {'content-type': 'application/json'},
        body: JSON.stringify({equipes: this.state.equipes}, {postes: this.state.postes})})
        .then((response) => {
            this.props.history.push('/joueur');
            return response.json();
            
        })
        .then((data) => {
            console.log(data)
            this.setState({equipes : data})
            (data.success)
        })
    }

    componentDidMount (){
        fetch("read/allequipes") 
       
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({equipes : data})
            if (data.success)
                this.props.history.push('/');
        })
        fetch("read/allpostes")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({postes : data})
            if (data.success)
                this.props.history.push('/');
        })

    }

    render() {
        return (
        <div>
        <h2>Home</h2>
            <label>
                Nom : 
                <input type="text" name="name" //value={this.state.name} // 
                onChange={this.handleChange} />
                <select>
                    {this.state.equipes.map((equipe, i) => {
                        return <option key={i} type="text" name="equipes" value={equipe.id_equipe} onChange={this.handleChange}>{equipe.nom_equipe}</option>   
                    })}
                </select>
                <select>
                    {this.state.postes.map((poste, i) => {
                        return <option key={i} type="text" name="postes" value= {poste.id_poste} onChange={this.handleChange}>{poste.nom_poste}</option>   
                    })}
                </select>
                <button type="button" onClick={this.handleSubmit}>Envoyer</button>
            </label>
        </div>
        )
    }
}
export default Home;