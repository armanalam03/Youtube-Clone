// import React, { useState } from 'react';  
import '../App.css';
import {searchbarStyle} from './components/SearchBar'
import {navStyle, containerStyle} from '../App'

/* class ToggleSwitch extends React.Component {
    
    const [myStyle, setmyStyle] ; useState({

    });

    render() { 
        return (
            <>
            <span className="toggle-mode">
              Dark Mode
            </span>
            <label class="switch" onClick={ToggleSwitch}>
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            </>
        );
    }
} 
 
export default ToggleSwitch; */


import React, {useState} from 'react'
import '../App.css'


export default function ToggleSwitch() {

    const [searchbarStyle, setsearchbarStyle] = useState({
        color: "white",
        backgroundColor: "black",
        border: "1px solid rgb(77, 77, 77)"
    })

    const ToggleSwitch = () => {

    }

  return (
    <div>
        <span className="toggle-mode">
              Dark Mode
            </span>
            <label class="switch" onClick={ToggleSwitch}>
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
    </div>
  )
}
