import React, { useState } from "react";
import * as S from "./styles";
import { Icon } from "../../components/icons/stylesIcons";
import { listM } from "../../json/mondstadt/listMondstadt";
import { listL } from "../../json/liyue/listLiyue";
import { listI } from "../../json/inazuma/listInazuma";
import { listS } from "../../json/sumeru/listSumeru";

export const HomePage = () => {
  const [pesquisa, setPesquisa] = useState("");

  const handleChangePesquisa = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPesquisa(event.target.value);
  };

  const mergedLista = [...listM, ...listL, ...listI, ...listS];

  const listaFiltrada = mergedLista.filter((item) =>
    item.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const listaOrdenada = listaFiltrada.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <S.MainContainer>
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
                <S.Text>
                  <Icon color={item.color} src={item.element} />
                  {item.name}
                </S.Text>
              </S.Alinhamento>
              <S.Personagem src={item.image} />
            </S.Card>
          );
        })}
      </S.Cards>
    </S.Caixa>
    <S.Footer/>
    </S.MainContainer>
  );
};
