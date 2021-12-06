import React from "react";

export default function TopBar() {
  return (
    <div>
      <div className="flex justify-between bg-blue-450">
        <a href="/" className="flex-auto">
          Acceuil
        </a>
        <a href="/" className="flex-auto">
          Nos Magasins
        </a>
        <a href="/" className="flex-auto">
          qui sommes-nous ?
        </a>
        <a href="/" className="flex-auto">
          {" "}
          Contactez-nous
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
