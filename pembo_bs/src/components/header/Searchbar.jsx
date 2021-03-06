import React from "react";
import { MdTravelExplore } from "react-icons/md";

export default function Searchbar() {
  return (
    <div className="flex justify-center mt-6 justify-items-center bg-white">
      <img
        src="https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715"
        className="max-h-14 rounded-2xl mt-2"
      alt="round"></img>
      <div className="flex mx-4 justify-items-center">
        <input
          type="search"
          placeholder="Recherche sur le site..."
          className="border-2 border-gray-300 bg-white h-10 pr-40 rounded-lg text-xl focus:outline-none my-4"
        ></input> <MdTravelExplore size="2.5em" />
      </div>
      <div className="flex mr-4 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        Me connecter
      </div>
      <div className="flex mr-4 mt-6 relative">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <p className="absolute top-0 left-0 ml-6">Panier</p>
        <p className="absolute top-0 left-0 ml-6 inline">0 articles</p>
      </div>
    </div>
  );
}
