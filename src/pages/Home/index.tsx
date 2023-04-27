import {
  Titulo,
  Caixa,
  Textos,
  Cards,
  Card,
  TextCard,
  Text,
  Pesquisar,
} from "./styles";
import {
  Anemo,
  Pyro,
  Cryo,
  Geo,
  Dendro,
  Eletro,
  Hydro,
} from "../../components/icons/stylesIcons";

export const HomePage = () => {
  return (
    <Caixa>
      <Titulo>Bem vindo</Titulo>
      <Pesquisar placeholder="Pesquisar por elemento" />
      {/* <Textos>
        Usamos a base decimal para representar nossos números, com caracteres
        que vão de 0 a 9 e são acrescidos de novas casas quando chegam em seus
        limites. Assim sendo, os algarimsos 15 em base decimal representam o
        décimo quinto valor da sequência numérica. A base hexadecimal utiliza 16
        caracteres para representar números, com caracteres que vão de 0 a F
        (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F), e dessa forma, o algarismo 10, na
        base hexadecimal, representa o décimo sexto valor numérico (16 decimal =
        10 hexadecimal). Neste sistema, o algarismo F representa o décimo quinto
        valor numérico, e o algarismo FF representa o ducentésimo quinquagésimo
        quinto valor (o 255 decimal).
      </Textos> */}
      <Cards>
        <Card id="anemo">
          <TextCard>
            <Anemo src="./anemo.png" />
          </TextCard>
          <Text>Anemo</Text>
        </Card>

        <Card id="pyro">
          <TextCard>
            <Pyro src="./pyro.png" />
          </TextCard>
          <Text>Pyro</Text>
        </Card>

        <Card id="cryo">
          <TextCard>
            <Cryo src="./cryo.png" />
          </TextCard>
          <Text>Cryo</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Geo</Text>
        </Card>

        <Card id="dendro">
          <TextCard>
            <Dendro src="./dendro.png" />
          </TextCard>
          <Text>Dendro</Text>
        </Card>

        <Card id="eletro">
          <TextCard>
            <Eletro src="./eletro.png" />
          </TextCard>
          <Text>Eletro</Text>
        </Card>

        <Card id="hydro">
          <TextCard>
            <Hydro src="./hydro.png" />
          </TextCard>
          <Text>Hydro</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Caixa 8</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Caixa 9</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Caixa 10</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Caixa 11</Text>
        </Card>

        <Card id="geo">
          <TextCard>
            <Geo src="./geo.png" />
          </TextCard>
          <Text>Caixa 12</Text>
        </Card>

      </Cards>
    </Caixa>
  );
};
