import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <PageLink>Acceuil</PageLink>
      </Link>
      <Link href="/">
        <PageLink>Nos Magasins</PageLink>
      </Link>
      <Link href="/">
        <PageLink>Qui nous sommes ?</PageLink>
      </Link>
      <Link href="/">
        <PageLink>Contactez-nous</PageLink>
      </Link>
    </Wrapper>
  );
};

export default Header;

const PageLink = tw.div`
flex-1 cursor-pointer text-gray-600
`;

const Wrapper = tw.div`
flex content-center bg-gray-100 h-12 px-80 pt-12
`;
