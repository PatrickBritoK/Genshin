import {
  Titulo,
  Caixa,
  Cards,
  Card,
  Textos,
  Alinhamento,
  Text,
  Pesquisar,
  Personagem,
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
import { lista } from "../../config/logica";

export const HomePage = () => {
  return (
    <Caixa>
      <Titulo>Bem vindo</Titulo>
      <Pesquisar placeholder="Pesquisar por elemento" />
      <Textos></Textos>
      <Cards>
        <Card id="anemo">
          <Alinhamento>
          <Text><Anemo src="./elements/anemo.png" />{lista[0]}</Text>
          </Alinhamento>
          <Personagem src="./personagens/venti.png" />
        </Card>

        <Card id="pyro">
          <Alinhamento>
          <Text><Pyro src="./elements/pyro.png" />{lista[1]}</Text>
          </Alinhamento>
          <Personagem src="./personagens/amber.png" />
          
          
        </Card>

        <Card id="cryo">
          <Alinhamento>
            <Cryo src="./elements/cryo.png" />
          </Alinhamento>
          <Text>{lista[2]}</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Geo</Text>
        </Card>

        <Card id="dendro">
          <Alinhamento>
            <Dendro src="./elements/dendro.png" />
          </Alinhamento>
          <Text>Dendro</Text>
        </Card>

        <Card id="eletro">
          <Alinhamento>
            <Eletro src="./elements/eletro.png" />
          </Alinhamento>
          <Text>Eletro</Text>
        </Card>

        <Card id="hydro">
          <Alinhamento>
            <Hydro src="./elements/hydro.png" />
          </Alinhamento>
          <Text>Hydro</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Caixa 8</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Caixa 9</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Caixa 10</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Caixa 11</Text>
        </Card>

        <Card id="geo">
          <Alinhamento>
            <Geo src="./elements/geo.png" />
          </Alinhamento>
          <Text>Caixa 12</Text>
        </Card>
      </Cards>
    </Caixa>
  );
};
