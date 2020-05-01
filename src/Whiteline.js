import React , {Component} from 'react';
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
import WhitelineObjectList from './WhitelineObjectList';

const objects = data.objects;

class Whiteline extends Component{

    constructor(props){
        super(props);
        this.state = {
            objects : objects,
            search: ''
        }
    }


    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({search: e.target.value})

    }


    render() {

        let filteredObjects = this.state.objects.filter((object) => {
            return ( object.name.toLowerCase().includes(this.state.search.toLowerCase()) || 
            object.category.toLowerCase().includes(this.state.search.toLowerCase()))
        })
        
        return (
                <BrowserRouter>
            <div>
                
            <div className="mainpage">
            <NavBarPage handleInput={this.handleInput}/>
            <h1 className=" tc">Welcome to whiteline</h1>
        
            <WhitelineObjectList objects={filteredObjects}/>

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
        );
    }

}

// const handleInput = (e) => {
//         console.log(e.target.value)
//         this.setState({search: e.target.value})
//     }
// const Whiteline = (props) => {


//     const object1 = objects.map( (object)=>{

//         return  <WhitelineObject id={object.id}
//                          name={object.name}
//                         image={object.image}/>

//     } )


//     return (
//         <BrowserRouter>
//     <div>
        
//     <div className="mainpage">
//     <NavBarPage handleInput={handleInput}/>
//     <h1 className=" tc">Welcome to whiteline</h1>
   
//     {object1}

//     {/* <Switch>
    
//     <Route path="/about" component={AboutPageCard}/>
//     <Route path="/contact" component={ContactPage}/>
//     </Switch> */}
  
//     <AboutPageCard/>
//     <ContactPage/>

//     <FooterPage/>
//     </div>

    
//     </div>
//     </BrowserRouter>
//     )
// }
export default Whiteline;