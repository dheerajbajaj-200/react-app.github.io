import React from 'react';
import './MenuStyle.css';
import {Link} from 'react-router-dom';

const Menu = () => {

    return (

        <div  className="MenuStyle">
            <ul >
            <li className="grow shadow-4"> <Link to="/"> Home </Link> </li>
            <li className="grow shadow-4"> <Link to="/about">About</Link></li>
            <li className="grow shadow-4"> <Link to="/contact">Contact </Link></li>

            </ul>
        </div>


    )


}

export default Menu;