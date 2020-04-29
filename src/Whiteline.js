import React from 'react';
import ReactDOM from 'react-dom';
import './Whitelinestyle.css';
import 'tachyons';
import WhitelineObject from './WhitelineObject';
import data from './data/data';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FooterPage from './Footer';
import AboutPageCard from  './AboutPageCard';
import ContactPage from './ContactPage';
import NavBarPage from './NavBarPage';

const objects = data.objects;
const Whiteline = (props) => {


    const object1 = objects.map( (object)=>{

        return  <WhitelineObject id={object.id}
                         name={object.name}
                        image={object.image}/>

    } )

    return (
        <BrowserRouter>
    <div>
        
    <div className="mainpage">
    <NavBarPage/>
    <h1 className=" tc">Welcome to whiteline</h1>
   
    {object1}

    {/* <Switch>
    
    <Route path="/about" component={AboutPageCard}/>
    <Route path="/contact" component={ContactPage}/>
    </Switch> */}
  
    <AboutPageCard/>
    <ContactPage/>

    <FooterPage/>
    </div>

    
    </div>
    </BrowserRouter>
    )
}
export default Whiteline;