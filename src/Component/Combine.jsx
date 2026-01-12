import React from 'react'
import {Routes,Route,Link} from "react-router-dom";
import Navbar from './Navbar';
import Count from './Count';
import Instruction from './Instruction';
import EventSummary from './EventSummary';
import Text from './Text';
import Sea from './Sea';
import Footer from './Footer';
function Combine() {
    return ( 
        <div class="back">
          {/* <Navbar/>  */}
          <Count/>      
         <Instruction/>   
         <EventSummary /> 
          <Sea/>  
        <Text/>   
       <Footer/>    
        </div>
     );
}

export default Combine;