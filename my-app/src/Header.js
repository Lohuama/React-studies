import React from 'react'
import Menu from './Menu'
import './App'


function Header(props){
    return (
    <header className='header'>
        <h2>{props.name}</h2>
        <Menu links={props.links}></Menu>
        
    </header>
  )
}

export default Header

//EXEMLO USANDO CLASS
// class Header extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     //METODO PAR RENDERIZAR O CONTEUDO
//     render(){return (
//         <header className='header'>
//             <h2>{this.props.name}</h2>
//             <Menu links={this.props.links}></Menu>
            
//         </header>
//       )

//     }
// }