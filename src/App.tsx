import Carrossel from "./components/Carrossel";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSearch />
      <Carrossel>ÚLTIMOS LANÇAMENTOS</Carrossel>
    </div>
  );
}

export default App;
