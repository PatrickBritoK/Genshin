import React, { useState } from "react";
import * as S from "./styles";
import { Icon } from "../../components/icons/stylesIcons";
import { listM } from "../../json/mondstadt"
import { listL } from "../../json/liyue"
import { listI } from "../../json/inazuma"
import { listS } from "../../json/sumeru"

export const HomePage = () => {
  const [pesquisa, setPesquisa] = useState("");

  const handleChangePesquisa = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPesquisa(event.target.value);
  };

  const mergedLista = [...listM, ...listL, ...listI, ...listS];

  const listaFiltrada = lista.filter((item) =>
    item.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const listaOrdenada = listaFiltrada.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <S.Caixa>
      <S.Titulo>Bem vindo</S.Titulo>
      <S.Pesquisar
        placeholder="Pesquisar por Personagem"
        value={pesquisa}
        onChange={handleChangePesquisa}
      />
      <S.Cards>
        {listaOrdenada.map((item) => {
          return (
            <S.Card
              key={item.name}
              color={item.ColorCard}
              shadowColor={item.ColorShadow}
            >
              <S.Alinhamento>
                <Text>
                  <Icon color={item.color} src={item.element} />
                  {item.name}
                </Text>
              </S.Alinhamento>
              <Personagem src={item.image} />
            </S.Card>
          );
        })}
      </S.Cards>
    </S.Caixa>
  );
};
