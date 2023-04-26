import { Link, Outlet } from "react-router-dom";

import { Container, Logo, GlobalStyle, Rotas, Botao, Cadastro } from "./styles";

export const Header = () => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Logo src="" />
        <Rotas>
          <Link to={"home"}>Home</Link>
          <Link to={"sobre"}>Sobre</Link>
          <Link to={"contatos"}>Contatos</Link>
        </Rotas>
        <Cadastro>
          <Botao>Acessar</Botao>
          <Botao>Cadastrar</Botao>
        </Cadastro>
        <Outlet />
      </Container>
    </>
  );
};
