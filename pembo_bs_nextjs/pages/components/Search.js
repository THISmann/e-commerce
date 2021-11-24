import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const Search = () => {
  return (
    <Wrapper>
      <Logo src="https://media.istockphoto.com/photos/smart-home-symbol-picture-id1314037715" />
      <SearchBar>
        <SearchInput placeholder="Rechercher dans le site ..." />
        <SearchButton> Rechercher</SearchButton>
      </SearchBar>
      <ConnectButton>SE connecter</ConnectButton>
      <Cart>My cart</Cart>
    </Wrapper>
  );
};

export default Search;
const Cart = tw.div`
`;
const ConnectButton = tw.div`

`;
const SearchBar = tw.div`
`;

const SearchInput = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;
const SearchButton = tw.button`
bg-black text-white text-center`;

const Logo = tw.img`
w-20 h-15 rounded
`;

const Wrapper = tw.div`
 flex justify-between bg-white h-200 py-20
`;
