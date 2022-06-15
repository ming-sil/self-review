import { CafeMenu } from "./components/0615/CafeMenu";
import { coffeeMenuDb, adeMenuDb, teaMenuDb } from "./components/0615/DB";

function App() {
  return (
    <>
      <CafeMenu coffee={coffeeMenuDb} ade={adeMenuDb} tea={teaMenuDb} />
    </>
  );
}

export default App;
