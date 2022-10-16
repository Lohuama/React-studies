import React from "react";

class Counter extends React.Component{

    //constructor é o primeiro ciclo de vida do codigo, pois é a primeira coisa q ele vai buscar para executar
    constructor(props){
        super(props);

        this.state = {count: this.props.count}
        this.add = this.add.bind(this)
    }

    add(){
        //this.setState({ count: this.state.count + 1})
        this.setState((state) => {return {count: state.count + 1}}, () => {
            console.log(this.state)
            localStorage.setItem("state", JSON.stringify(this.state))
        })
        
    }

    //segundo metodo do ciclo de vida - renderiza o metodo apos o estado
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.add}>add</button>
            </div>
        )    
    }
    
    /*
    EXEMPLOS DE METODOS DO CICLO DE VIDA DE UM COMPONENTE

    este ciclo informa se este metodo deve ser atualizado ou nao no componete
     shouldComponentUpdate(){
        return true;
     }

     /* sera executdo dps que o componente for mostrado na tela, tbm é usado para fazer fetch
    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('state')))

    }*/

    /* sera executado sempre que um componente for removido da tela 
    
    componentWillUnmount(){
    
   }
     */

    
   

}
export default Counter