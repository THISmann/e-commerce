import React from "react";
import './TopBar.css';
import { MdAccountBalance } from "react-icons/md";
import { MdStore } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

export default function TopBar() {
  return (
    <div>
      <div className="flex justify-between topBar">
        <div className="flex-auto">
          <a href="/" className="flex-auto">
          <MdAccountBalance size="2em" color="white" />
            Acceuil
          </a>
        </div>
        
        <a href="/" className="flex-auto">
        <MdStore size="2em" color="white"/>
          Nos Magasins
        </a>

        <a href="/" className="flex-auto">
        <MdPeople size="2em" color="white"/>
          qui sommes-nous ?
        </a>

        <a href="/" className="flex-auto">
          < MdContactPhone size="2em" color="white"/>
          Contactez-nous
        </a>
      </div> 
    </div>
  );
}
