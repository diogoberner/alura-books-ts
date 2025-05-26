import BooksSection from "./components/BooksSection";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";
import JoinUsSection from "./components/JoinUsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSearch />
      <BooksSection>ÚLTIMOS LANÇAMENTOS</BooksSection>
      <BooksSection>MAIS VENDIDOS</BooksSection>
      <JoinUsSection />
    </div>
  );
}

export default App;
