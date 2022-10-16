import React from 'react'

function Menu(props){
    const linksNames = props.links.map((link, index) =><li key={index}>{link}</li>)
    return(
    <ul className='menu'>
        {linksNames}
    </ul>
  );
}
export default Menu