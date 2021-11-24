import tw from "tailwind-styled-components/dist/tailwind";
import Header from "./components/header";
import Search from "./components/search";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Search />
    </Wrapper>
  );
}

const Wrapper = tw.div`
h-screen bg-red-100`;
