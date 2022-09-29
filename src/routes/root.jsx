import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Contact from "./contact";

export default function Root() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // 👇️ toggle visibility
        console.log("have ?");
        setIsShown(current => !current);
    };
    
    const hideContactCard = event => {
        // 👇️ toggle visibility
        console.log("have ?");
        setIsShown(current => false);
    };

    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link onClick={hideContactCard}>Rick and Morty</Link>
              </li>
              <li>
                <Link onClick={handleClick}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div id="detail sidebar" style={ {display: isShown? 'flex' : 'none' , width:"100%"}}>
            <Contact />
        </div>
      </>
    );
  }