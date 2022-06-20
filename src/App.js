import { CafeMenu } from "./components/0615/CafeMenu";
import { coffeeMenuDb, adeMenuDb, teaMenuDb } from "./components/0615/DB";
import { Ans } from "./components/0616/Ans";
import { progLangDb } from "./components/0616/DB";
import { StyleComponentEx } from "./components/0616/StyleComponentsEx";
import { ColorChange } from "./components/0620/ColorChange";
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
      <ColorChange />
    </>
  );
}

export default App;
