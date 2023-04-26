import {
  Titulo,
  Caixa,
  Textos,
  Cards,
  Card,
  TextCard,
  IconFire,
  IconSparks,
  IconFlower,
  Text,
} from "./styles";

export const HomePage = () => {
  return (
    <Caixa>
      <Titulo>Bem vindo</Titulo>
      <Textos>
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
      </Textos>
      <Cards>
        <Card>
          <TextCard>
            <IconFire />
          </TextCard>
          <Text>GiFrostfire</Text>
        </Card>
        <Card>
          <TextCard>
            <IconSparks />
          </TextCard>
          <Text>GiLaserSparks</Text>
        </Card>
        <Card>
          <TextCard>
            <IconFlower />
          </TextCard>
          <Text>GiSpotedFlower</Text>
        </Card>
      </Cards>
    </Caixa>
  );
};
