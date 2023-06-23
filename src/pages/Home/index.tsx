import React, { useState } from "react";
import {
  Titulo,
  Caixa,
  Cards,
  Card,
  // Textos,
  Alinhamento,
  Text,
  Pesquisar,
  Personagem,
} from "./styles";
import { Icon } from "../../components/icons/stylesIcons";
import { lista } from "../../config/logica";

export const HomePage = () => {
  const [pesquisa, setPesquisa] = useState("");

  const handleChangePesquisa = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPesquisa(event.target.value);
  };

  const listaFiltrada = lista.filter((item) =>
    item.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const listaOrdenada = listaFiltrada.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Caixa>
      <Titulo>Bem vindo</Titulo>
      <Pesquisar
        placeholder="Pesquisar por Personagem"
        value={pesquisa}
        onChange={handleChangePesquisa}
      />
      <Cards>
        {listaOrdenada.map((item) => {
          return (
            <Card  key={item.name} color={item.ColorCard}>
              <Alinhamento>
                <Text>
                  <Icon color={item.color} src={item.element} />
                  {item.name}
                </Text>
              </Alinhamento>
              <Personagem src={item.image} />
            </Card>
          );
        })}
      </Cards>
    </Caixa>
  );
};
