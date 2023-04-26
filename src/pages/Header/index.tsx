import { Link, Outlet } from "react-router-dom";
import { Container, Logo, GlobalStyle, Rotas, Outro  } from "./styles";

export const Header = () => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Link to={"/"}><Logo src="./ceu.png" /></Link>
        <Rotas>
          <Link to={"home"}>Home</Link>
          <Link to={"sobre"}>Sobre</Link>
          <Link to={"contatos"}>Contatos</Link>
          <Link to={"lojas"}>Lojas</Link>
        </Rotas>
        <Outro>teste</Outro>
        <Outlet />
      </Container>
    </>
  );
};
