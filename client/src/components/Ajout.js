import React from 'react';

class Ajout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            names: []
        }
    }

    componentDidMount(){
        fetch("create/newjoueur")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({names : data})
            
        })
    }
    
    
    // handleChange = (e) => {
    //     let target = e.target;
    //     this.setState({
    //         [target.name]: target.value
    //     })
    // }

    render(){
        return(
           <div>
            <h2>Page Ajout</h2>
          </div>
        )

    }
}
export default Ajout;