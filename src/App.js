import { CafeMenu } from "./components/0615/CafeMenu";
import { coffeeMenuDb, adeMenuDb, teaMenuDb } from "./components/0615/DB";
import { Ans } from "./components/0616/Ans";
import { progLangDb } from "./components/0616/DB";
import { StyleComponentEx } from "./components/0616/StyleComponentsEx";
import { ColorChange } from "./components/0620/ColorChange";
import { ColorSelect } from "./components/0620/ColorSelect";
import { ImgSelect, ImgSelect2 } from "./components/0620/ImgSelect";
import { BaseRouter } from "./components/0621/BaseRouter";
import { GlobalStyled } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyled />

      {/* 1 */}
      {/* <CafeMenu coffee={coffeeMenuDb} ade={adeMenuDb} tea={teaMenuDb} /> */}

      {/* 2 */}
      {/* <StyleComponentEx datas={progLangDb} />
      <Ans datas={progLangDb} /> */}

      {/* 3 */}
      {/* <ColorChange />
      <ColorSelect />
      <ImgSelect /> */}

      {/* 4 */}
      <BaseRouter />
    </>
  );
}

export default App;
