import { CafeMenu } from "./components/0615/CafeMenu";
import { coffeeMenuDb, adeMenuDb, teaMenuDb } from "./components/0615/DB";
import { progLangDb } from "./components/0616/DB";
import { StyleComponentEx } from "./components/0616/StyleComponentsEx";
import { GlobalStyled } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyled />
      {/* <CafeMenu coffee={coffeeMenuDb} ade={adeMenuDb} tea={teaMenuDb} /> */}
      <StyleComponentEx datas={progLangDb} />
    </>
  );
}

export default App;
