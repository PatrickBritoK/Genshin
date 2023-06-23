import { Link, Outlet } from "react-router-dom";
import { Container, Logo, Rotas, Outro, DiscordIcon } from "./styles";

export const Header = () => {
  return (
    <>
      <Container>
        <Link to={"/"}>{/* <Logo src="./ceu.png" /> */}</Link>
        <Rotas>
          <Link to={"home"}>Home</Link>
          <Link to={"sobre"}>Sobre</Link>
          <Link to={"contatos"}>Contatos</Link>
          <Link to={"lojas"}>Lojas</Link>
        </Rotas>
        <Outro href="https://discord.gg/BPRUPqJRSW" target="_blank">
          Discord <DiscordIcon />
        </Outro>
      </Container>
      <Outlet />
    </>
  );
};
