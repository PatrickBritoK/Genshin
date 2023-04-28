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
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[0]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Albedo.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[1]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Alhaitham.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[2]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Aloy.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[3]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/amber.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[4]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Ayaka.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[5]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Ayato.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[6]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Barbara.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[7]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Beidou.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[8]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Bennett.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[9]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Candace.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[10]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Childe.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[11]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Chongyun.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[12]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Collei.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[13]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Cyno.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[14]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Dehya.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[15]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Diluc.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[16]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Diona.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[17]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Dori.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[18]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Eula.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[19]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Faruzan.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[20]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Fischl.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[21]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Ganyu.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[22]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Gorou.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[23]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Heizou.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[24]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Hu Tao.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[25]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Itto.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[26]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Jean.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[27]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Kaeya.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[28]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Kazuha.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[29]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Keqing.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[30]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Klee.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[31]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Kokomi.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[32]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Kuki Shinobu.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[33]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Layla.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[34]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Lisa.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/cryo.png" />
              {lista[35]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Mika.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/hydro.png" />
              {lista[36]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Mona.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[37]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Nahida.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[38]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Nilou.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[39]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Ningguang.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[40]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Noelle.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[41]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Qiqi.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[42]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Raiden.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[43]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Razor.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[44]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Rosaria.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[45]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Sara.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[46]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Sayu.png" />
        </Card>
        <Card id="cryo">
          <Alinhamento>
            <Text>
              <Cryo src="./elements/cryo.png" />
              {lista[47]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Shenhe.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[48]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Sucrose.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[49]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Thoma.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[50]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Tighnari.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[51]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Traveler.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[52]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Traveler.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[53]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Traveler.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[54]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Traveler.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[55]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Venti.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[56]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Wanderer.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[57]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Xiangling.png" />
        </Card>
        <Card id="anemo">
          <Alinhamento>
            <Text>
              <Anemo src="./elements/anemo.png" />
              {lista[58]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Xiao.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[59]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Xingqiu.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[60]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Xinyan.png" />
        </Card>
        <Card id="eletro">
          <Alinhamento>
            <Text>
              <Eletro src="./elements/eletro.png" />
              {lista[61]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yae Miko.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[62]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yanfei.png" />
        </Card>
        <Card id="dendro">
          <Alinhamento>
            <Text>
              <Dendro src="./elements/dendro.png" />
              {lista[63]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yaoyao.png" />
        </Card>
        <Card id="hydro">
          <Alinhamento>
            <Text>
              <Hydro src="./elements/hydro.png" />
              {lista[64]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yelan.png" />
        </Card>
        <Card id="pyro">
          <Alinhamento>
            <Text>
              <Pyro src="./elements/pyro.png" />
              {lista[65]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yoimiya.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[66]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Yun Jin.png" />
        </Card>
        <Card id="geo">
          <Alinhamento>
            <Text>
              <Geo src="./elements/geo.png" />
              {lista[67]}
            </Text>
          </Alinhamento>
          <Personagem src="./personagens/Zhongli.png" />
        </Card>
        
      </Cards>
    </Caixa>
  );
};
