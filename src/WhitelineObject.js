import React from  'react';

const WhitelineObject = (props) => {

    const logo = require('./images/'+props.image);

    console.log(logo)
    return (

        <div className="whitelinestyle ma4 bg-light dib pa3 grow shadow-4 tc">
        <img src={logo} alt="avatar"/>
        <h1 className=""> {props.name} </h1>
    <p>{props.name}</p>
    </div>

    )
}

export default WhitelineObject;