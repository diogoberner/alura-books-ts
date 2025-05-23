import BooksSection from "./components/BooksSection";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSearch />
      <BooksSection>ÚLTIMOS LANÇAMENTOS</BooksSection>
    </div>
  );
}

export default App;
