import React, {Component} from 'react';
import WhitelineObject from './WhitelineObject';

function WhitelineObjectList(props){

        let wobjects = props.objects.map( (object,i)=>{

            return  <WhitelineObject key={i} id={object.id}
                             name={object.name}
                            image={object.image}/>
    
        } )

        return (
            <div id="main">
                {wobjects}
            </div>
        )
}

export default WhitelineObjectList;