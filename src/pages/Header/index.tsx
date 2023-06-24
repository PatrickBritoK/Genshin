import { Link, Outlet } from "react-router-dom";
import { Container, Logo, Rotas, Discord, DiscordIcon } from "./styles";

export const Header = () => {
  return (
    <>
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo>CB/Genshin</Logo>
        </Link>
        <Rotas>
          <Link to={"home"}>Home</Link>
          <Link to={"sobre"}>Sobre</Link>
          <Link to={"contatos"}>Contatos</Link>
          <Link to={"lojas"}>Lojas</Link>
        </Rotas>
        <Discord href="https://discord.gg/BPRUPqJRSW" target="_blank">
          Discord <DiscordIcon />
        </Discord>
      </Container>
      <Outlet />
    </>
  );
};
